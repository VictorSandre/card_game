import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[app-flippable-card]'
})
export class FlippableCardDirective {

  constructor(private el: ElementRef) { }

  tiltEffectSettings = {
    max: 25, // max tilt rotation (degrees (deg))
    perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
    scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
  };

  @HostListener('mousemove', ['$event']) tiltCard(event: MouseEvent) {
    const cardWidth = this.el.nativeElement.offsetWidth;
    const cardHeight = this.el.nativeElement.offsetHeight;
    const centerX = this.el.nativeElement.offsetLeft + cardWidth/2;
    const centerY = this.el.nativeElement.offsetTop + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = (+1)*this.tiltEffectSettings.max*mouseY/(cardHeight/2);
    const rotateYUncapped = (-1)*this.tiltEffectSettings.max*mouseX/(cardWidth/2);
    const rotateX = rotateXUncapped < -this.tiltEffectSettings.max ? -this.tiltEffectSettings.max :
                    (rotateXUncapped > this.tiltEffectSettings.max ? this.tiltEffectSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -this.tiltEffectSettings.max ? -this.tiltEffectSettings.max :
                    (rotateYUncapped > this.tiltEffectSettings.max ? this.tiltEffectSettings.max : rotateYUncapped);

    this.el.nativeElement.style.transform = `perspective(${this.tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                            scale3d(${this.tiltEffectSettings.scale}, ${this.tiltEffectSettings.scale}, ${this.tiltEffectSettings.scale})`;
  }

  //todo
  @HostListener('mouseleave') mouseLeave() {
    this.el.nativeElement.style.transform = `perspective(${this.tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }
}
