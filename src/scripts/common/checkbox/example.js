import { Checkbox } from "./checkbox";

export function ExampleCheckboxGroup(html) {
    this.root = $(html);
   
    const checkboxes = this.root
        .find('.checkbox')
        .toArray()
        .map(el => new Checkbox(el))
        .map(el => {
            el.root[0].addEventListener('toggle', () => {
                this.count += el.value? 1 : -1;
            });
            return el;
        })

    Object.defineProperty(this, 'count', {
        set() {
            this.root.find('.active-checkboxes').text(`Активные: ${this.count}`)
        },
        get() {
            return checkboxes.filter(el => el.value).length;
        }
    });

    this.count = this.count;
}