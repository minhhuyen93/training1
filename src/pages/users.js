System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, Users;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Users = /** @class */ (function () {
                function Users() {
                    this.users = [
                        { firstName: "huyen", lastName: "nguyen", userName: "Huyen Nguyen" },
                        { firstName: "nguyen", lastName: "nguyen", userName: "Thanh Nga" },
                        { firstName: "Min", lastName: "Go", userName: "MinGo" }
                    ];
                }
                Users.prototype.onEditClicked = function () {
                };
                Users = __decorate([
                    core_1.Component({
                        templateUrl: "src/pages/users.html"
                    })
                ], Users);
                return Users;
            }());
            exports_1("Users", Users);
        }
    };
});
//# sourceMappingURL=users.js.map