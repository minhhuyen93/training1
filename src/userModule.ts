import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Layout } from "./layout";
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        UserRoutes,
        CommonModule,
        FormsModule
    ],
    declarations: [Layout],
    bootstrap: [Layout]
})
export class UserModule { }