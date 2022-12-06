import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardViewComponent implements OnInit {

  @ViewChild('cardHtml')
  public cardHtml!: ElementRef<HTMLDivElement>;

  public followMouse(event: MouseEvent) {
    let around1 = -1 * (event.y * 100 / window.innerHeight * 0.2 -10);
    let around2 = -1 * (event.x * 100 / window.innerWidth * 0.2 -10);
    let trans1 = (event.x *100 / window.innerWidth *0.3);
    let trans2 = (event.y *100 / window.innerHeight *0.3);
    this.cardHtml.nativeElement.style.transform = `
    translate3d(${trans1}px, ${trans2}px, 0)
    scale(1)
    rotatex(${around1}deg)
    rotatey(${around2}deg)
    `;
  }


  constructor() { }

  ngOnInit() {
  }

}
