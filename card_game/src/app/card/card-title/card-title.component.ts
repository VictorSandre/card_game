import { Component, ElementRef, HostBinding, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardTitleComponent{
  @HostBinding('class.app-card-title') isAppCard = true;
  @Input() title!: string;
}
