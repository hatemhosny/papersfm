"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// nativescript
var tnsApp = require("tns-core-modules/application");
var tnsUtils = require("tns-core-modules/utils/utils");
var platform_1 = require("tns-core-modules/platform");
var enums_1 = require("tns-core-modules/ui/enums");
var router_2 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// libs
var Subject_1 = require("rxjs/Subject");
/**
 * This service can be used for low level app wiring
 * for best practice purposes, this service sets up:
 * - app version
 * - orientation handling including a Subject the app can observe
 * - deviceType to help component bindings
 * - example of global app event wiring for resume/suspend
 * - injection of TNSFontIconService to ensure font icons are loaded on boot
 */
var AppService = /** @class */ (function () {
    function AppService(_router, _ngRouter, _ngZone, 
        // ensures font icon's are initialized on app boot
        _fonticon) {
        this._router = _router;
        this._ngRouter = _ngRouter;
        this._ngZone = _ngZone;
        this._fonticon = _fonticon;
        this._orientation$ = new Subject_1.Subject();
        // initialize core services
        this._initAppVersion();
        this._initOrientation();
        this._initAppEvents();
    }
    Object.defineProperty(AppService.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            console.log('setting orientation:', value);
            this._orientation = value;
            this._orientation$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "orientation$", {
        get: function () {
            return this._orientation$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "deviceType", {
        get: function () {
            return this._deviceType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppService.prototype, "appVersion", {
        get: function () {
            return this._appVersion;
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype._initAppVersion = function () {
        var versionName;
        var buildNumber;
        if (tnsApp.android) {
            var pi = tnsApp.android.context.getPackageManager().getPackageInfo(tnsApp.android.context.getPackageName(), 0);
            versionName = pi.versionName;
            buildNumber = pi.versionCode.toString();
        }
        else if (tnsApp.ios) {
            versionName = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString');
            buildNumber = NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleVersion');
        }
        this._appVersion = "v" + versionName + " (" + buildNumber + ")";
        console.log('App version:', this._appVersion);
    };
    AppService.prototype._initAppEvents = function () {
        // For the future - may want to use these
        tnsApp.on(tnsApp.resumeEvent, function () {
            console.log('tnsApp.resumeEvent');
        });
        tnsApp.on(tnsApp.suspendEvent, function () {
            console.log('tnsApp.suspendEvent');
        });
    };
    AppService.prototype._initOrientation = function () {
        var _this = this;
        this._deviceType = platform_1.device.deviceType;
        console.log('deviceType:', this._deviceType);
        console.log('initializing orientation handling.');
        // set initial orientation
        this.orientation = getOrientation();
        console.log('current orientation:', this.orientation);
        // handle orientation changes
        tnsApp.on(tnsApp.orientationChangedEvent, function (e) {
            // sometimes e.newValue will be undefined, ignore those
            if (e.newValue && _this.orientation !== e.newValue) {
                console.log("Old: " + _this.orientation + "; New: " + e.newValue);
                _this._ngZone.run(function () {
                    _this.orientation = getOrientation();
                });
            }
        });
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            router_1.Router,
            core_1.NgZone,
            nativescript_ngx_fonticon_1.TNSFontIconService])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
var getOrientation = function () {
    if (platform_1.isIOS) {
        var deviceOrientation = tnsUtils.ios.getter(UIDevice, UIDevice.currentDevice).orientation;
        return deviceOrientation === 3 /* LandscapeLeft */ ||
            deviceOrientation === 4 /* LandscapeRight */
            ? enums_1.DeviceOrientation.landscape
            : enums_1.DeviceOrientation.portrait;
    }
    else {
        var orientation_1 = getContext()
            .getResources()
            .getConfiguration().orientation;
        switch (orientation_1) {
            case 1 /* ORIENTATION_PORTRAIT (0x00000001) */:
                return enums_1.DeviceOrientation.portrait;
            case 2 /* ORIENTATION_LANDSCAPE (0x00000002) */:
                return enums_1.DeviceOrientation.landscape;
            default:
                /* ORIENTATION_UNDEFINED (0x00000000) */
                return enums_1.DeviceOrientation.portrait;
        }
    }
};
var getContext = function () {
    var ctx = java.lang.Class
        .forName('android.app.AppGlobals')
        .getMethod('getInitialApplication', null)
        .invoke(null, null);
    if (ctx) {
        return ctx;
    }
    return java.lang.Class
        .forName('android.app.ActivityThread')
        .getMethod('currentApplication', null)
        .invoke(null, null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFVBQVU7QUFDVixzQ0FBbUQ7QUFDbkQsMENBQXdEO0FBRXhELGVBQWU7QUFDZixxREFBdUQ7QUFDdkQsdURBQXlEO0FBQ3pELHNEQUFxRTtBQUNyRSxtREFBOEQ7QUFDOUQsc0RBQStEO0FBQy9ELHVFQUErRDtBQUUvRCxPQUFPO0FBQ1Asd0NBQXVDO0FBRXZDOzs7Ozs7OztHQVFHO0FBRUg7SUFTRSxvQkFDVSxPQUF5QixFQUN6QixTQUFpQixFQUNqQixPQUFlO1FBQ3ZCLGtEQUFrRDtRQUMxQyxTQUE2QjtRQUo3QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFFZixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQVIvQixrQkFBYSxHQUFpQixJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQVVsRCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQVcsbUNBQVc7YUFBdEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBdUIsS0FBSztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQU5BO0lBUUQsc0JBQVcsb0NBQVk7YUFBdkI7WUFDRSxNQUFNLENBQUMsSUFBSSxD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QVMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUM7U0FDeEMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ25CLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztTQUNyQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1NBQ3JDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbi8vIG5hdGl2ZXNjcmlwdFxyXG5pbXBvcnQgKiBhcyB0bnNBcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XHJcbmltcG9ydCAqIGFzIHRuc1V0aWxzIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBkZXZpY2UsIGlzSU9TLCBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgRGV2aWNlT3JpZW50YXRpb24gfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHNlcnZpY2UgY2FuIGJlIHVzZWQgZm9yIGxvdyBsZXZlbCBhcHAgd2lyaW5nXHJcbiAqIGZvciBiZXN0IHByYWN0aWNlIHB1cnBvc2VzLCB0aGlzIHNlcnZpY2Ugc2V0cyB1cDpcclxuICogLSBhcHAgdmVyc2lvblxyXG4gKiAtIG9yaWVudGF0aW9uIGhhbmRsaW5nIGluY2x1ZGluZyBhIFN1YmplY3QgdGhlIGFwcCBjYW4gb2JzZXJ2ZVxyXG4gKiAtIGRldmljZVR5cGUgdG8gaGVscCBjb21wb25lbnQgYmluZGluZ3NcclxuICogLSBleGFtcGxlIG9mIGdsb2JhbCBhcHAgZXZlbnQgd2lyaW5nIGZvciByZXN1bWUvc3VzcGVuZFxyXG4gKiAtIGluamVjdGlvbiBvZiBUTlNGb250SWNvblNlcnZpY2UgdG8gZW5zdXJlIGZvbnQgaWNvbnMgYXJlIGxvYWRlZCBvbiBib290XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcclxuICAvLyBmdW5kYW1lbnRhbHNcclxuICBwcml2YXRlIF9hcHBWZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gIC8vIG9yaWVudGF0aW9uIGhlbHBlclxyXG4gIHByaXZhdGUgX29yaWVudGF0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfb3JpZW50YXRpb24kOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgX2RldmljZVR5cGU6ICdQaG9uZScgfCAnVGFibGV0JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICBwcml2YXRlIF9uZ1JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAvLyBlbnN1cmVzIGZvbnQgaWNvbidzIGFyZSBpbml0aWFsaXplZCBvbiBhcHAgYm9vdFxyXG4gICAgcHJpdmF0ZSBfZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gaW5pdGlhbGl6ZSBjb3JlIHNlcnZpY2VzXHJcbiAgICB0aGlzLl9pbml0QXBwVmVyc2lvbigpO1xyXG4gICAgdGhpcy5faW5pdE9yaWVudGF0aW9uKCk7XHJcbiAgICB0aGlzLl9pbml0QXBwRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG9yaWVudGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBvcmllbnRhdGlvbih2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgb3JpZW50YXRpb246JywgdmFsdWUpO1xyXG4gICAgdGhpcy5fb3JpZW50YXRpb24gPSB2YWx1ZTtcclxuICAgIHRoaXMuX29yaWVudGF0aW9uJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3JpZW50YXRpb24kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yaWVudGF0aW9uJDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgZGV2aWNlVHlwZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZXZpY2VUeXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBhcHBWZXJzaW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FwcFZlcnNpb247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9pbml0QXBwVmVyc2lvbigpIHtcclxuICAgIGxldCB2ZXJzaW9uTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IGJ1aWxkTnVtYmVyOiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKHRuc0FwcC5hbmRyb2lkKSB7XHJcbiAgICAgIGNvbnN0IHBpID0gdG5zQXBwLmFuZHJvaWQuY29udGV4dC5nZXRQYWNrYWdlTWFuYWdlcigpLmdldFBhY2thZ2VJbmZvKHRuc0FwcC5hbmRyb2lkLmNvbnRleHQuZ2V0UGFja2FnZU5hbWUoKSwgMCk7XHJcbiAgICAgIHZlcnNpb25OYW1lID0gcGkudmVyc2lvbk5hbWU7XHJcbiAgICAgIGJ1aWxkTnVtYmVyID0gcGkudmVyc2lvbkNvZGUudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodG5zQXBwLmlvcykge1xyXG4gICAgICB2ZXJzaW9uTmFtZSA9IE5TQnVuZGxlLm1haW5CdW5kbGUub2JqZWN0Rm9ySW5mb0RpY3Rpb25hcnlLZXkoJ0NGQnVuZGxlU2hvcnRWZXJzaW9uU3RyaW5nJyk7XHJcbiAgICAgIGJ1aWxkTnVtYmVyID0gTlNCdW5kbGUubWFpbkJ1bmRsZS5vYmplY3RGb3JJbmZvRGljdGlvbmFyeUtleSgnQ0ZCdW5kbGVWZXJzaW9uJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9hcHBWZXJzaW9uID0gYHYke3ZlcnNpb25OYW1lfSAoJHtidWlsZE51bWJlcn0pYDtcclxuICAgIGNvbnNvbGUubG9nKCdBcHAgdmVyc2lvbjonLCB0aGlzLl9hcHBWZXJzaW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRBcHBFdmVudHMoKSB7XHJcbiAgICAvLyBGb3IgdGhlIGZ1dHVyZSAtIG1heSB3YW50IHRvIHVzZSB0aGVzZVxyXG4gICAgdG5zQXBwLm9uKHRuc0FwcC5yZXN1bWVFdmVudCwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygndG5zQXBwLnJlc3VtZUV2ZW50Jyk7XHJcbiAgICB9KTtcclxuICAgIHRuc0FwcC5vbih0bnNBcHAuc3VzcGVuZEV2ZW50LCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0bnNBcHAuc3VzcGVuZEV2ZW50Jyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2luaXRPcmllbnRhdGlvbigpIHtcclxuICAgIHRoaXMuX2RldmljZVR5cGUgPSBkZXZpY2UuZGV2aWNlVHlwZTtcclxuICAgIGNvbnNvbGUubG9nKCdkZXZpY2VUeXBlOicsIHRoaXMuX2RldmljZVR5cGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2luaXRpYWxpemluZyBvcmllbnRhdGlvbiBoYW5kbGluZy4nKTtcclxuXHJcbiAgICAvLyBzZXQgaW5pdGlhbCBvcmllbnRhdGlvblxyXG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZygnY3VycmVudCBvcmllbnRhdGlvbjonLCB0aGlzLm9yaWVudGF0aW9uKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgb3JpZW50YXRpb24gY2hhbmdlc1xyXG4gICAgdG5zQXBwLm9uKHRuc0FwcC5vcmllbnRhdGlvbkNoYW5nZWRFdmVudCwgZSA9PiB7XHJcbiAgICAgIC8vIHNvbWV0aW1lcyBlLm5ld1ZhbHVlIHdpbGwgYmUgdW5kZWZpbmVkLCBpZ25vcmUgdGhvc2VcclxuICAgICAgaWYgKGUubmV3VmFsdWUgJiYgdGhpcy5vcmllbnRhdGlvbiAhPT0gZS5uZXdWYWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBPbGQ6ICR7dGhpcy5vcmllbnRhdGlvbn07IE5ldzogJHtlLm5ld1ZhbHVlfWApO1xyXG4gICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0T3JpZW50YXRpb24gPSBmdW5jdGlvbigpIHtcclxuICBpZiAoaXNJT1MpIHtcclxuICAgIGNvbnN0IGRldmljZU9yaWVudGF0aW9uID0gdG5zVXRpbHMuaW9zLmdldHRlcihVSURldmljZSwgVUlEZXZpY2UuY3VycmVudERldmljZSkub3JpZW50YXRpb247XHJcblxyXG4gICAgcmV0dXJuIGRldmljZU9yaWVudGF0aW9uID09PSBVSURldmljZU9yaWVudGF0aW9uLkxhbmRzY2FwZUxlZnQgfHxcclxuICAgICAgZGV2aWNlT3JpZW50YXRpb24gPT09IFVJRGV2aWNlT3JpZW50YXRpb24uTGFuZHNjYXBlUmlnaHRcclxuICAgICAgPyBEZXZpY2VPcmllbnRhdGlvbi5sYW5kc2NhcGVcclxuICAgICAgOiBEZXZpY2VPcmllbnRhdGlvbi5wb3J0cmFpdDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRDb250ZXh0KClcclxuICAgICAgLmdldFJlc291cmNlcygpXHJcbiAgICAgIC5nZXRDb25maWd1cmF0aW9uKCkub3JpZW50YXRpb247XHJcbiAgICBzd2l0Y2ggKG9yaWVudGF0aW9uKSB7XHJcbiAgICAgIGNhc2UgMSAvKiBPUklFTlRBVElPTl9QT1JUUkFJVCAoMHgwMDAwMDAwMSkgKi86XHJcbiAgICAgICAgcmV0dXJuIERldmljZU9yaWVudGF0aW9uLnBvcnRyYWl0O1xyXG4gICAgICBjYXNlIDIgLyogT1JJRU5UQVRJT05fTEFORFNDQVBFICgweDAwMDAwMDAyKSAqLzpcclxuICAgICAgICByZXR1cm4gRGV2aWNlT3JpZW50YXRpb24ubGFuZHNjYXBlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8qIE9SSUVOVEFUSU9OX1VOREVGSU5FRCAoMHgwMDAwMDAwMCkgKi9cclxuICAgICAgICByZXR1cm4gRGV2aWNlT3JpZW50YXRpb24ucG9ydHJhaXQ7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29udGV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGN0eCA9IGphdmEubGFuZy5DbGFzc1xyXG4gICAgLmZvck5hbWUoJ2FuZHJvaWQuYXBwLkFwcEdsb2JhbHMnKVxyXG4gICAgLmdldE1ldGhvZCgnZ2V0SW5pdGlhbEFwcGxpY2F0aW9uJywgbnVsbClcclxuICAgIC5pbnZva2UobnVsbCwgbnVsbCk7XHJcbiAgaWYgKGN0eCkge1xyXG4gICAgcmV0dXJuIGN0eDtcclxuICB9XHJcblxyXG4gIHJldHVybiBqYXZhLmxhbmcuQ2xhc3NcclxuICAgIC5mb3JOYW1lKCdhbmRyb2lkLmFwcC5BY3Rpdml0eVRocmVhZCcpXHJcbiAgICAuZ2V0TWV0aG9kKCdjdXJyZW50QXBwbGljYXRpb24nLCBudWxsKVxyXG4gICAgLmludm9rZShudWxsLCBudWxsKTtcclxufTtcclxuIl19