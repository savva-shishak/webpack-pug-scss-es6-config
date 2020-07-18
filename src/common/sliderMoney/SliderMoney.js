import { SliderFromTo } from "../slider/sliderFromTo";

export function SliderMoney(node) {
    SliderFromTo.call(this, node, {step: 1/25});
    this.valueLabel = this.root.find(".slider__value");

    const updateValueLabel = () => {
        this.valueLabel.text(`${format(this.line.from)} - ${format(this.line.to)}`);
    }

    this.line.root[0].addEventListener('to', updateValueLabel);
    this.line.root[0].addEventListener('from', updateValueLabel);
    
    this.line.from = 0;
    this.line.to = 1;

    function format(num) {
        return num * 10000 << 0;
    }
}