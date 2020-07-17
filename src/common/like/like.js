import { Toggle } from "../toggle/toggle";

import "./like.scss"

export function Like(html) {
    Toggle.call(this, html);
    this.trueClass = 'like_true';

    Object.defineProperty(this, 'likeValue', {
        set(value) {
            this.root.find('.like__number').text(value)
        },
        get() {
            return +this.root.find('.like__number').text();
        }
    })

    this.root[0].addEventListener('toggle', () => {
        this.likeValue = +this.likeValue + (this.value? 1 : -1);
    });
}