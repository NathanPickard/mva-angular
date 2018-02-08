import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Logger } from "./services/logger";
import { AppComponent } from "./app.component";


import "../../scss/styles.scss";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [Logger]
})
export class AppModule { }
