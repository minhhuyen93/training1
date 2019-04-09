import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Users } from "./pages/users";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
let routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: "full" },
    { path: "users", component: Users }
];
@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
    exports: [RouterModule],
    declarations: [Users]
})
export class UserRoutes { }