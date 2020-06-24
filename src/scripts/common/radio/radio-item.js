export function RadioItem(html) {
    this.root = $(html);
    this.name = this.root.attr('name'); 

    let valueRadio = this.root.hasClass("radio_true");

    Object.defineProperty(this, 'value', {
        set(newValue) {
            valueRadio = newValue;
            if (valueRadio) {
                this.root.addClass("radio_true");
            } else {
                this.root.removeClass("radio_true");
            }
        },
        get() {
            return valueRadio;
        }
    })
}