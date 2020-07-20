export function Line(node, {steps = 10} = {}) {
    const root = $(node);
    const line = root.find(".slider__control");
    const left = root.find(".slider__space_left");
    const right = root.find(".slider__space_right");

    function stepsMin(num) {
        return (num * steps >> 0) / steps
    }

    function stepsMax(num) {
        return stepsMin(num) + 1/steps;
    }

    function input(num) {
        return num * root.width();
    }

    function output(num) {
        return num / root.width();
    }

   Object.defineProperties(this, {
       from: {
            get() {
                return output(left.width())
            },
            set(value) {
                left.width(input(stepsMin(value)));
            }
       },
       to: {
            get() {
                return 1 - output(right.width())
            },
            set(value) {
                right.width(input(stepsMin(1 - value)));
            }
       },
       line: {
           get() {return line}
       },

   });
}