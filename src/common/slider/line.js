export function Line(node, {step = 1/6} = {}) {
    this.root = $(node);

    const line = this.root.find(".slider__control");

    const setMin = size => {
        line.css('margin-left', getMinStep(size) * this.maximum + "px");
    }

    const setMax = size => {
        line.width(getMaxStep(size) * this.maximum + "px")
    }

    function getMinStep(size) {
        return (size / step << 0) * step
    }

    function getMaxStep(size) {
        return (size / step + step << 0) * step
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
                return +this.root.width();
            }
        }
    });
}