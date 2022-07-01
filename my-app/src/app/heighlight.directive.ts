import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {

  @Input('appHeighlight')
  ishighlighted = false;

  @Output()
  toggleHeightlight = new EventEmitter<any>();

  constructor() { }

  @HostBinding('class.heighlighted') // name of the property should known DOM property
  get cssClasses(){
      return this.ishighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return "true";
  }

  @HostListener('mouseover',['$event'])
  mouseOver(){
    this.ishighlighted = true;
    this.toggleHeightlight.emit(this.ishighlighted);
  }

  @HostListener('mouseleave',['$event'])
  mouseLeave(){
    this.ishighlighted = false;
    this.toggleHeightlight.emit(this.ishighlighted);
  }

}
