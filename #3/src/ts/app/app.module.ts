import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Logger, simpleLogger } from "./services/logger";
import { ColorsToken} from "./tokens/colors-token";
import { ColorsMutable } from "./services/colors-mutable";
import { ColorsImmutable } from "./services/colors-immutable";
import { AppComponent } from "./app.component";


import "../../scss/styles.scss";

// const useImmutable = false;

// const colorsFactory = (logger: Logger) => {
//     if (useImmutable) {
//         return new ColorsImmutable(logger);
//     } else {
//         return new Colors(logger);
//     }
// };

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: Logger, useValue: simpleLogger },
        { provide: ColorsToken, useClass: ColorsImmutable }]
})
export class AppModule { }
