import { Checkbox } from "../checkbox/checkbox";

import "./toggle.scss";

export function Toggle(html) {
    this.root = $(html);
    this.trueClass = 'toggle_true';
    const subscribes = [];
    const event = new Event('toggle');

    Object.defineProperty(this, 'value', {
        set(newValue) {
            this.root[newValue? 'addClass' : 'removeClass'](this.trueClass);
            this.root[0].dispatchEvent(event);
        },
        get() {
            return this.root.hasClass(this.trueClass)
        }
    });

    this.root.click(() => this.value = !this.value);
}