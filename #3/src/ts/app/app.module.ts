import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Logger, simpleLogger } from "./services/logger";
// import { Logger, simpleLogger } from "./services/logger";
import { Colors } from "./services/colors";
import { ColorsImmutable } from "./services/colors-immutable";
import { AppComponent } from "./app.component";


import "../../scss/styles.scss";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: Logger, useValue: simpleLogger },
        { provide: Colors, useClass: ColorsImmutable }]
})
export class AppModule { }
