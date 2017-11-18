"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// libs
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
// app
var services_1 = require("./services");
var services_2 = require("../items/services");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    fa: './assets/font-awesome.min.css'
                })
            ],
            providers: services_1.CORE_PROVIDERS.concat(services_2.ITEMS_PROVIDERS)
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6QyxPQUFPO0FBQ1AsdUVBQThEO0FBRTlELE1BQU07QUFDTix1Q0FBNEM7QUFDNUMsOENBQW9EO0FBVXBEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFVBQVU7UUFSdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDeEIsRUFBRSxFQUFFLCtCQUErQjtpQkFDcEMsQ0FBQzthQUNIO1lBQ0QsU0FBUyxFQUFNLHlCQUFjLFFBQUssMEJBQWUsQ0FBQztTQUNuRCxDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuXHJcbi8vIGFwcFxyXG5pbXBvcnQgeyBDT1JFX1BST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyBJVEVNU19QUk9WSURFUlMgfSBmcm9tICcuLi9pdGVtcy9zZXJ2aWNlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICBmYTogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5taW4uY3NzJ1xyXG4gICAgfSlcclxuICBdLFxyXG4gIHByb3ZpZGVyczogWy4uLkNPUkVfUFJPVklERVJTLCAuLi5JVEVNU19QUk9WSURFUlNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHt9XHJcbiJdfQ==