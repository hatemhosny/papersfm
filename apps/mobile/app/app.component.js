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
var core_1 = require("@angular/core");
// app
var app_service_1 = require("./modules/core/services/app.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(
        // ensure singleton construction on app boot)
        _appService) {
        this._appService = _appService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFFMUMsTUFBTTtBQUNOLG1FQUFpRTtBQU1qRTtJQUNFO1FBQ0UsNkNBQTZDO1FBQ3JDLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBQzlCLENBQUM7SUFKTyxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUM7eUNBSXVCLHdCQUFVO09BSHRCLFlBQVksQ0FLeEI7SUFBRCxtQkFBQztDQUFBLEFBTEQsSUFLQztBQUxZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4vbW9kdWxlcy9jb3JlL3NlcnZpY2VzL2FwcC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnMtYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAvLyBlbnN1cmUgc2luZ2xldG9uIGNvbnN0cnVjdGlvbiBvbiBhcHAgYm9vdClcclxuICAgIHByaXZhdGUgX2FwcFNlcnZpY2U6IEFwcFNlcnZpY2VcclxuICApIHt9XHJcbn1cclxuIl19