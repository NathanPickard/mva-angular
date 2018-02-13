import { Injectable } from "@angular/core";

import { Colors } from "../models/colors";
import { Logger } from "./logger";

@Injectable()
export class ColorsImmutable implements Colors{

    private colorList: string[] = [];

    constructor(private logger: Logger) { }

    public getAll() {
        this.logger.log("retrieved color list");
        return this.colorList;
    }

    public addColor(color: string) {
        this.logger.log("added color to the list immutably: " + color);
        this.colorList = this.colorList.concat(color);
    }
}