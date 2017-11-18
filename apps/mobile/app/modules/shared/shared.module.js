"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// nativescript
var forms_1 = require("nativescript-angular/forms");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
// libs
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var SHARED_MODULES = [common_1.NativeScriptCommonModule, forms_1.NativeScriptFormsModule, router_1.NativeScriptRouterModule, nativescript_ngx_fonticon_1.TNSFontIconModule];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: SHARED_MODULES.slice(),
            exports: SHARED_MODULES.slice()
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsZUFBZTtBQUNmLG9EQUFxRTtBQUNyRSxzREFBdUU7QUFDdkUsc0RBQXVFO0FBRXZFLE9BQU87QUFDUCx1RUFBOEQ7QUFFOUQsSUFBTSxjQUFjLEdBQUcsQ0FBQyxpQ0FBd0IsRUFBRSwrQkFBdUIsRUFBRSxpQ0FBd0IsRUFBRSw2Q0FBaUIsQ0FBQyxDQUFDO0FBTXhIO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFlBQVk7UUFKeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFNLGNBQWMsUUFBQztZQUM1QixPQUFPLEVBQU0sY0FBYyxRQUFDO1NBQzdCLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuY29uc3QgU0hBUkVEX01PRFVMRVMgPSBbTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLCBUTlNGb250SWNvbk1vZHVsZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFsuLi5TSEFSRURfTU9EVUxFU10sXHJcbiAgZXhwb3J0czogWy4uLlNIQVJFRF9NT0RVTEVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XHJcbiJdfQ==