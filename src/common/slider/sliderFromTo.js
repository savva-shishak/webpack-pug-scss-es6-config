import "./slider.scss"
import { Contoller } from "./controller";
import { Line } from "./line";

export function SliderFromTo(html, opts) {
    const root = $(html);
    const ctrlFrom = root.find(".slider__point_from");
    const ctrlTo = root.find(".slider__point_to");

    const line = new Line(root.find(".slider__container"), opts);
    
    new Contoller(root.find(".slider__point_to"), line, 'to');

    if (!opts.single) {
        new Contoller(root.find(".slider__point_from"), line, 'from');   
    }

    this.line = line;
    this.root = root;
    this.ctrlTo = ctrlTo;
    this.ctrlFrom = ctrlFrom;
}