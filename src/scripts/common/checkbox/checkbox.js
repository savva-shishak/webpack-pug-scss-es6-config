import { Toggle } from "../toggle/toggle";

import "./checkbox.scss";

export function Checkbox(html) {
    Toggle.call(this, html);
    this.trueClass = 'checkbox_true';
}