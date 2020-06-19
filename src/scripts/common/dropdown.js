export function DropDown(htmlBlock, {btnToggler, bodyToggle, openClass}) {
    this.root = $(htmlBlock);
    this.toggleBtn = this.root.find(btnToggler);
    this.body = this.root.find(bodyToggle);

    let toggleValue = this.root.hasClass(openClass);

    Object.defineProperty(this, 'toggle', {
        set(value) {
            if (value) {
                this.root.addClass(openClass);
                this.body.slideDown();
            } else {
                this.root.removeClass(openClass);
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

export function TextfieldDropdown(el) {
    DropDown.call(this, el, {
        btnToggler: '.textfield__btn',
        bodyToggle: '.textfield__down',
        openClass: 'textfield_open'
    });
}