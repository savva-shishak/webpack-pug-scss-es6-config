import "./slider.scss"

export function Slider(html) {
    const root = $(html);
    const ctrlMin = root.find(".slider__point_min");
    const ctrlMax = root.find(".slider__point_max");

    const line = root.find(".slider__control");
    const container = root.find(".slider__container");
    const step = .1;
    const values = [];

    for (let i = 0; i < (1 / step) + 1; i++) {
        values.push((i * step).toFixed(4));
    }

    console.log(values);

    ctrlMax.mousedown(e => {
        const {body} = document
        const oldCursorVale = body.style.cursor;
        body.style.cursor = "grabbing";
        const startX = e.clientX;
        const oldMaxValue = this.max

        const moveMouse = e => {
            this.max = +oldMaxValue - ((+startX - +e.clientX) / +this.maximum);
        }

        body.addEventListener("mouseup", upMouse);
        body.addEventListener("mousemove", moveMouse);

        function upMouse() {
            body.style.cursor = oldCursorVale;
            body.removeEventListener("mousemove", upMouse);
            body.removeEventListener("mousemove", moveMouse);
        }

    });

    ctrlMin.mousedown(e => {
        const {body} = document
        const oldCursorVale = body.style.cursor;
        body.style.cursor = "grabbing";
        const startX = e.clientX;
        const oldMinValue = this.min

        const moveMouse = e => {
            this.min = +oldMinValue - ((+startX - +e.clientX) / +this.maximum);
        }

        body.addEventListener("mouseup", upMouse);
        body.addEventListener("mousemove", moveMouse);

        function upMouse() {
            body.style.cursor = oldCursorVale;
            body.removeEventListener("mousemove", upMouse);
            body.removeEventListener("mousemove", moveMouse);
        }

    });

    Object.defineProperties(this, {
        max: {
            get() {
                const max = container.width()
                const margin = line.css('margin-left').split('px')[0];
                const width = line.width()
                return ((+width + +margin) / +max).toFixed(4)
            },
            set(value) {
                const oldMinValue = this.min;
                const max = container.width()
                if (value <= +this.min + .1) {
                    line.width(.1 * +this.maximum);
                } else if (value >= 1) { 
                    line.width((1 - this.min) * max + "px") 
                } else {
                    line.width((+value - +this.min) * max + "px");
                }
                line.css('margin-left', oldMinValue * max + "px");
            }
        },
        min: {
            get() {
                const max = container.width()
                const margin = line.css('margin-left').split('px')[0];
                return (+margin / +max).toFixed(4);
            },
            set(value) {
                const oldMaxValue = this.max;
                const max = container.width()
                if (value >= this.max - .1) {
                    line.css('margin-left', (+this.max - .1) * +max + "px")
                } else if (value <= 0) {
                    line.css('margin-left', 0);
                } else {                    
                    line.css('margin-left', +value * +max + "px");
                }
                this.max = oldMaxValue;
            }
        },
        maximum: {
            get() {
                return +container.width();
            }
        }
    });

    this.min = .1;
    this.max = .75;
}