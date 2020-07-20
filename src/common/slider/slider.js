import "./slider.scss"
import { Line } from "./line";

export function Slider(html, opts = {}) {
    const root = $(html);
    const body = $(document.body);
    const container = root.find(".slider__container");
    const line = new Line(container, opts);

    line.to = opts.to || 1;
    line.from = opts.from || 0;

    body.mousemove(({which, target, pageX, originalEvent}) => {
        originalEvent.preventDefault();

        if (which === 1 && isChildren(target)) {
            console.log(pageX);
            console.log($(target).position().left);
        }
    });

    console.log(root.position());

    function isChildren({parentElement}) {
        if (parentElement == null) {
            return false;
        }
        if (parentElement == root[0]) {
            return true;
        }
        return isChildren(parentElement )
    }
}