export function Count(htmlBlock) {
    this.root = $(htmlBlock);
    this.input = this.root.find('.count__input');
    this.name = this.root.find('.count__label').text();
    const [,valueBlock] = this.input.children();

    Object.defineProperty(this, 'value', {
        set(v) {
            $(valueBlock).text(v);

            this.fillInput();

            if (this.subscribe) {
                this.subscribe();
            }
        },
        get() {
            return $(valueBlock).text();
        }
    });

    this.fillInput = function() {
        this.input.empty();

        this.input.append(
            this.value > 0 ? this.minusFlat() : emptyFlat(),
            valueBlock,
            this.plusFlat(),
        );
    }

    function emptyFlat() {
        return $(document.createElement('div')).addClass('count__empty');
    }

    this.plusFlat = function() {
        return  $(document.createElement('div'))
            .addClass('count__flat')
            .text('+')
            .click(() => this.value++);
    }

    this.minusFlat = function() {
        return  $(document.createElement('div'))
            .addClass('count__flat')
            .text('-')
            .click(() => this.value--);
    }
    
    this.fillInput();
}