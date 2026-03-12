import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';


@Directive({
  selector: '[buttonBackground]',
  standalone: false
})
export class ButtonBackground implements OnInit{

  constructor(private el:ElementRef,
              private rend:Renderer2,) { }

  @Input()  bgColor:string="rgb(215, 72, 92)" ;
  @Input()  focusBgColor:string="rgb(42,117,88)";

  @HostListener('mouseenter')
  mouseEnter(){
    this.setColor(this.focusBgColor);
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.setColor(this.bgColor);
  }

  setColor(color:string){
    this.rend.setStyle(this.el.nativeElement,'background',color)
  }

ngOnInit() {
  this.mouseLeave();
}


}
