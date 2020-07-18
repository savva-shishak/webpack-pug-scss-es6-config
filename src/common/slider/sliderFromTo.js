import "./slider.scss"

export function SliderFromTo(html, {step = 1/6} = {}) {
    const root = $(html);
    const ctrlFrom = root.find(".slider__point_from");
    const ctrlTo = root.find(".slider__point_to");

    const line = root.find(".slider__control");
    const container = root.find(".slider__container");

    ctrlTo.mousedown(e => {
        const {body} = document
        const oldCursorVale = body.style.cursor;
        body.style.cursor = "grabbing";
        const startX = e.clientX;
        const oldMaxValue = this.to

        const moveMouse = e => {
            this.to = +oldMaxValue - ((+startX - +e.clientX) / +this.maximum);
        }

        body.addEventListener("mouseup", upMouse);
        body.addEventListener("mousemove", moveMouse);

        function upMouse() {
            body.style.cursor = oldCursorVale;
            body.removeEventListener("mousemove", upMouse);
            body.removeEventListener("mousemove", moveMouse);
        }

    });

    ctrlFrom.mousedown(e => {
        const {body} = document
        const oldCursorVale = body.style.cursor;
        body.style.cursor = "grabbing";
        const startX = e.clientX;
        const oldMinValue = this.from

        const moveMouse = e => {
            this.from = +oldMinValue - ((+startX - +e.clientX) / +this.maximum);
        }

        body.addEventListener("mouseup", upMouse);
        body.addEventListener("mousemove", moveMouse);

        function upMouse() {
            body.style.cursor = oldCursorVale;
            body.removeEventListener("mousemove", upMouse);
            body.removeEventListener("mousemove", moveMouse);
        }

    });

    const setMin = size => {
        line.css('margin-left', getMinStep(size) * this.maximum + "px");
    }

    const setMax = size => {
        line.width(getMaxStep(size) * this.maximum + "px")
    }

    Object.defineProperties(this, {
        to: {
            get() {
                const margin = line.css('margin-left').split('px')[0];
                const width = line.width()
                return ((+width + +margin) / + this.maximum).toFixed(4)
            },
            set(value) {
                
                if (value <= +this.from + step) {
                    setMax(step);
                } else if (value >= 1) { 
                    setMax(1 - +this.from);
                } else {
                    setMax(+value - +this.from);
                }
                this.root[0].dispatchEvent(new Event('to'));
            }
        },
        from: {
            get() {
                const margin = line.css('margin-left').split('px')[0];
                return (+margin / +this.maximum).toFixed(4);
            },
            set(value) {
                const oldMaxValue = this.to;

                if (value >= this.to - step) {
                    setMin(this.to - step);
                } else if (value <= 0) {
                    setMin(0)
                } else {                    
                    setMin(+value);
                }

                this.to = oldMaxValue;
                this.root[0].dispatchEvent(new Event('from'));
            }
        },
        maximum: {
            get() {
                return +container.width();
            }
        }
    });

    function getMinStep(size) {
        return (size / step << 0) * step
    }

    function getMaxStep(size) {
        return (size / step + step << 0) * step
    }

    this.root = root;
    this.ctrlTo = ctrlTo;
    this.ctrlFrom = ctrlFrom;
}