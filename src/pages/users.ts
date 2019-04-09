import { Component } from "@angular/core";

@Component({
    templateUrl: "src/pages/users.html"
})

export class Users {
    public users: Array<any> = [
        { firstName: "huyen", lastName: "nguyen", userName: "Huyen Nguyen" },
        { firstName: "nguyen", lastName: "nguyen", userName: "Thanh Nga" },
        { firstName: "Min", lastName: "Go", userName: "MinGo" }
    ];
    public onEditClicked(): void {

    }
}