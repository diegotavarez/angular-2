import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this._renderer.setElementStyle(this._elementRef.nativeElement,'background-color','white');
    this.backgroundColor = this.defaultColor;
  }

  //@HostBinding('style.background-color') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra
    return this.backgroundColor;
  }
  private backgroundColor: string;


  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() {

  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
