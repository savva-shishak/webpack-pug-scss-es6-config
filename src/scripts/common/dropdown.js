export function BedsForm(htmlBlock) {
    DropDown.call(this, htmlBlock);

    console.log(this);
}

export function DropDown(htmlBlock) {
    this.root = $(htmlBlock);
    this.toggleBtn = this.root.find('.textfield__btn');
    this.body = this.root.find('.textfield__down');

    let toggleValue = this.root.hasClass('textfield_open');

    Object.defineProperty(this, 'toggle', {
        set(value) {
            if (value) {
                this.root.addClass('textfield_open');
                this.body.slideDown();
            } else {
                this.root.removeClass('textfield_open');
                this.body.slideUp();
            }
            toggleValue = value;
        },
        get() {
            return toggleValue;
        }
    })
    
    this.toggleBtn.click(() => this.toggle = !this.toggle);

    if (toggleValue) {
        this.body.show();
    } else {
        this.body.hide();
    }
}