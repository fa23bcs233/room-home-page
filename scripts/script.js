class NavMenu{
    constructor(menu, menuOpenButton, menuCloseButton){
        this.menu = document.querySelector(menu);
        this.menuOpenButton = document.querySelector(menuOpenButton);
        this.menuCloseButton = document.querySelector(menuCloseButton) || this.menuOpenButton;

        this.init();
    }

    init(){
        this.menuOpenButton.addEventListener('click', () => {
            this.openMenu();
        });

        this.menuCloseButton.addEventListener('click', () => {
            this.closeMenu();
        });
    }

    openMenu(){
        this.menu.classList.remove('nav--closed');
        this.menu.classList.add('nav--opened');
    }

    closeMenu(){
        this.menu.classList.add('nav--closed');
        this.menu.classList.remove('nav--opened');
    }
}

class Slider{
    constructor(slider, sliderItems, sliderNext, sliderPrev){
        this.slider = document.querySelector(slider);
        this.sliderItems = document.querySelectorAll(sliderItems);
        this.sliderNext = document.querySelector(sliderNext);
        this.sliderPrev = document.querySelector(sliderPrev);
        this.activeClass = sliderItems.replace('.', '') + '--active';
        this.currentSlide = 0;

        this.init();
    }

    init(){
        this.sliderNext.addEventListener('click', () => {
            this.nextSlide();
        });

        this.sliderPrev.addEventListener('click', () => {
            this.prevSlide();
        });
    }

    nextSlide(){
        if(this.currentSlide == this.sliderItems.length - 1) return;

        const currentSlide = this.sliderItems[this.currentSlide];
        currentSlide.classList.remove(this.activeClass);

        this.currentSlide++;
        const nextSlide = this.sliderItems[this.currentSlide];
        nextSlide.classList.add(this.activeClass);

        // Update the CSS custom property
        this.slider.style.setProperty('--current-slide-no', this.currentSlide + 1);
    }

    prevSlide(){
        if(this.currentSlide == 0) return;

        const currentSlide = this.sliderItems[this.currentSlide];
        currentSlide.classList.remove(this.activeClass);

        this.currentSlide--;
        const nextSlide = this.sliderItems[this.currentSlide];
        nextSlide.classList.add(this.activeClass);

        this.slider.style.setProperty('--current-slide-no', this.currentSlide + 1);
    }
}

// Main Script
(()=>{
    const navMenu = new NavMenu(".nav" , ".nav__toggle-hamburger", ".nav__toggle-close");
    const slider = new Slider(".hero", ".hero__contentSlider__slide", ".hero__controls__next", ".hero__controls__prev");

})()


