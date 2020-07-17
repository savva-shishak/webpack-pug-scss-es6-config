import "./rating.scss";

export function Ratting(html) {
    this.root = $(html);
    this.items = this.root.find(".rating__item");

    this.items.toArray()
        .map((block, id) => $(block).attr('title', id+1));

    Object.defineProperty(this, 'value', {
        get() {
            return this.items
                .toArray()
                .filter((block, id) => $(block).hasClass("rating__item_true"))
                .length
        },
        set(value) {
            for (let i = 0; i < value; i++) {
                $(this.items[i]).addClass('rating__item_true')
            }
            for (let i = value; i < 5; i++) {
                $(this.items[i]).removeClass('rating__item_true')
            }
            this.root[0].dispatchEvent(new Event('rating'));
        }
    });

    Object.defineProperty(this, 'hoverList', {
        get() {
            return this.items
                .toArray()
                .filter((block, id) => $(block).hasClass("rating__item_hover"))
                .length
        },
        set(value) {
            for (let i = 0; i < value; i++) {
                $(this.items[i]).addClass('rating__item_hover')
            }
            for (let i = value; i < 5; i++) {
                $(this.items[i]).removeClass('rating__item_hover')
            }
        }
    });

    this.root[0].addEventListener('click', e => {
        if (e.target.classList.contains("rating__item")) {
            this.value = +e.target.title;
            this.hoverList = 0;
        }
    });

    this.root[0].addEventListener('mouseover', e => {
        if (e.target.classList.contains("rating__item")) {
            this.hoverList = +e.target.title;
        }
    });

    this.root[0].addEventListener('mouseout', () => {
        this.hoverList = 0;
    });
}