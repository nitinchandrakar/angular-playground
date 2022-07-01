import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero.data';
import { HeroComponent } from './hero/hero.component';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Tour of Heroes';
  heroes:Hero[];

  /*We can also give template reference 'compRef'
   <app-hero #compRef>

   @ViewChild(HeroComponent, {read:ElementRef})
  heroComp!: HeroComponent;

  */

  //It won't access element of ng-content
  @ViewChild(HeroComponent)
  heroComp!: HeroComponent;

  @ViewChildren(HeroComponent)
  heroComps!:QueryList<HeroComponent>

  constructor(
    private services:ServicesService
  ){
    this.heroes = HEROES;
  }

  ngOnInit(){
    this.services.message$.subscribe((message)=>{
        console.log("message from service", message)
    })
  }

  ngAfterViewInit(){
      // Here we should not modify any data
      console.log(this.heroComps);
  }

  handleCallBack(params:Hero){
    console.log(params);
    console.log(this.heroComp);
  }

  toggleEventHandler($event:any){
    console.log($event)
  }
  
}
