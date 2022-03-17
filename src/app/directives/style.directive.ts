import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
  }

  @HostListener('mouseenter', ['$event']) onEnter(event: Event) {
    console.log(event)
    this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: Event) {
    this.r.setStyle(this.el.nativeElement, 'color', null)
  }

}
