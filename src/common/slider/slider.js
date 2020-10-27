import "./slider.scss"
import { Line } from "./line";

export function Slider(html, opts = {}) {
    const root = $(html);
    const body = $(document.body);
    const container = root.find(".slider__container");
    const line = new Line(container, opts);

    line.to = opts.to || .6;
    line.from = opts.from || 0.4;

    let pointMove = null;
    let startX = null;
    let endX = null;
    let valueMoved = null;

    // body.on('mouseover', e => {
    //     pointMove = null;
    // });

    container.on('mouseup', e => {
        pointMove = null;
    });

    container.on('mousedown', e => {
        const target = $(e.target);
        startX = e.clientX / line.line.width();

        if (target.hasClass('slider__point_from')) {
            pointMove = 'from';
            valueMoved = line.from;
        }

        if (target.hasClass('slider__point_to')) {
            pointMove = 'to';
            valueMoved = line.to;
        }
    });

    container.on('mousemove', e => {
        e.preventDefault();
        endX = e.clientX / line.line.width();
        if (pointMove) {
            changePosition();
        }
    });

    function changePosition() {
        console.log(valueMoved + (endX - startX));
    }
}