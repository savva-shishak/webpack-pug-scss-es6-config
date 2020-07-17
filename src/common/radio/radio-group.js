import { RadioItem } from "./radio-item";

export function RadioGroup(html) {
    this.root = $(html);

    this.items = this.root
                .find('.radio')
                .toArray()
                .map(child => new RadioItem(child));

    this.items.forEach(item => {
        item.root.click(() => this.value = item.name);
    });

    Object.defineProperty(this, 'value', {
        set(newValue) {
            this.root.attr('value', newValue);
    
            this.items.forEach(item => item.value = item.name == newValue);
        },
        get() {
            return this.root.attr('value', name) || null;
        }
    });

    this.items.forEach(({value, name}) => {
        if (value) {
            this.value = name;     
        }
    });
}