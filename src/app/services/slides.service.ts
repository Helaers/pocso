import { Injectable } from '@angular/core';

import { Draggable } from '../directives/draggable'; // just to shut up TS

let SLIDES = [
    { 
        id: 1, 
        html:["<img class='slide__image' src='./assets/images/slide1.png' /> " +
                "<audio controls>" +
                    "<source src='./assets/slimmer-dan-de-zanger.mp3' type='audio/mpeg'>" +
                    "Your browser does not support the audio element." +
                "</audio>"], 
        thumb: './assets/images/thumb1.png', 
        visible: true 
    },
    { id: 2, html:["<img class='slide__image' src='./assets/images/slide2.png' />"], thumb: './assets/images/thumb2.png', visible: true },
    { id: 3, html:["<img class='slide__image' src='./assets/images/slide3.png' />"], thumb: './assets/images/thumb3.png', visible: true },
    { id: 4, html:["<img class='slide__image' src='./assets/images/slide4.png' />"], thumb: './assets/images/thumb4.png', visible: true },
    { id: 5, html:["<img class='slide__image' src='./assets/images/slide5.png' />"], thumb: './assets/images/thumb5.png', visible: true },
    { id: 6, html:["<img class='slide__image' src='./assets/images/slide6.png' />"], thumb: './assets/images/thumb6.png', visible: true },
    { id: 7, html:["<img class='slide__image' src='./assets/images/slide7.png' />"], thumb: './assets/images/thumb7.png', visible: true }
];

@Injectable()
export class SlidesService {

    public currentSlide:number;

    getAll() {
        return SLIDES;
    }

    setSlides(slides) {
        SLIDES = slides;
    }

    getSlide(id:number) {
        return SLIDES.find(item => item.id === id);
    }

    addSlide(slide:any) {
        SLIDES.push(slide);
    }

    removeSlide(slide:any) {
        let slideToRemove = SLIDES.find(item => item.id === slide.id);
        let index = SLIDES.indexOf(slideToRemove);
        if (index > -1) {
            SLIDES.splice(index, 1);
        }
    }

    toggleVisibility(id:number) {
        let slide = this.getSlide(id);
        slide.visible = !slide.visible;
    }
}