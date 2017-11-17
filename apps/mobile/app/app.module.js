"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
// app
var core_module_1 = require("./modules/core/core.module");
var shared_module_1 = require("./modules/shared/shared.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [nativescript_module_1.NativeScriptModule, http_1.NativeScriptHttpModule, core_module_1.CoreModule, shared_module_1.SharedModule, app_routing_1.AppRoutingModule],
            providers: [
                // this allows standard Angular route lazy load syntax across whole project
                {
                    provide: core_1.NgModuleFactoryLoader,
                    useClass: router_1.NSModuleFactoryLoader
                }
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ1Ysc0NBQWtGO0FBRWxGLGVBQWU7QUFDZixnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLHNEQUFvRTtBQUVwRSxNQUFNO0FBQ04sMERBQXdEO0FBQ3hELGdFQUE4RDtBQUM5RCw2Q0FBaUQ7QUFDakQsaURBQStDO0FBa0IvQztJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFoQnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLDZCQUFzQixFQUFFLHdCQUFVLEVBQUUsNEJBQVksRUFBRSw4QkFBZ0IsQ0FBQztZQUNqRyxTQUFTLEVBQUU7Z0JBQ1QsMkVBQTJFO2dCQUMzRTtvQkFDRSxPQUFPLEVBQUUsNEJBQXFCO29CQUM5QixRQUFRLEVBQUUsOEJBQXFCO2lCQUNoQzthQUNGO1lBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUM1QixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFuZ3VsYXJcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gbmF0aXZlc2NyaXB0XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9jb3JlL2NvcmUubW9kdWxlJztcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLCBDb3JlTW9kdWxlLCBTaGFyZWRNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGVdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgLy8gdGhpcyBhbGxvd3Mgc3RhbmRhcmQgQW5ndWxhciByb3V0ZSBsYXp5IGxvYWQgc3ludGF4IGFjcm9zcyB3aG9sZSBwcm9qZWN0XHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlcixcclxuICAgICAgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlclxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG4vKlxyXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19