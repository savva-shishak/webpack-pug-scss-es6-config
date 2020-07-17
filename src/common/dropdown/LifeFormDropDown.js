import { TextfieldDropdown } from "./dropdown";
import { Count } from "../count/index";

export function LifeFormDropDown(htmlElement) {
    TextfieldDropdown.call(this, htmlElement);

    const [rooms, bedRooms, waterRooms] = this.body.find('.count');

    this.counts = {
        rooms:      new Count(rooms),
        bedRooms:   new Count(bedRooms),
        waterRooms: new Count(waterRooms),
    }

    this.clearBtn = this.root.find('[act="clear"]');
    this.enterBtn = this.root.find('[act="enter"]');

    this.labelValue = this.root.find('.textfield__input');

    this.fillValueLabel = function() {
        let values = [];

        for (const count in this.counts) {
            if (this.counts.hasOwnProperty(count)) {
                const { value, name } = this.counts[count];

                if (+value) {
                    values.push(value + ' ' + name);
                }
            }
        }

        this.labelValue.text(values.join(', ').maxLength(30) || 'Без пожеланий');
    }

    this.fillValueLabel();

    this.clearBtn.click(() => {
        for (const count in this.counts) {
            if (this.counts.hasOwnProperty(count)) {
                this.counts[count].value = 0;
            }
        }
    });

    this.enterBtn.click(() => {
        this.fillValueLabel();
        this.toggle = false;
    });
}

String.prototype.maxLength = function(maxValue) {
    return this.length > maxValue? this.slice(0, (maxValue - 3)) + '...' : this;
}