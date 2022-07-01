import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';


import { Hero } from '../hero';
import { HEROES } from '../hero.data';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {

  @Input()
  heroes!: Hero[];

  @Output()
  callBack = new EventEmitter<Hero>();

  //only access element of ng-content
  @ContentChild('compTitle')
  compTitle!:ElementRef;
  
  
  selectedHero?: Hero;

  constructor(
    private service :ServicesService 
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.compTitle)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.callBack.emit(hero)
    this.service.sendMessage(hero);
  }

}
