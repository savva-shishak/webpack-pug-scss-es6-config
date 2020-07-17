import "./radio.scss";

export function RadioItem(html) {
    this.root = $(html);
    this.name = this.root.attr('name'); 


    Object.defineProperty(this, 'value', {
        set(newValue) {
            this.root[newValue? 'addClass': 'removeClass']("radio_true");
        },
        get() {
            return this.root.hasClass("radio_true");
        }
    })
}