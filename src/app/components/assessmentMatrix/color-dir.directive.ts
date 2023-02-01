import { Directive, HostBinding, Input,HostListener} from '@angular/core';
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Directive({
  selector: '[appColorDir]'
})
export class ColorDirDirective {

  private toggle: boolean = false;
  @Input() color: string = 'red';

  constructor(private doms: DomSanitizer) { }

  @HostBinding('style') get myStyle(): SafeStyle {
    let style : string = this.toggle ? `background: ${this.color}` : '';
    return this.doms.bypassSecurityTrustStyle(style);
  }

  @HostListener('click') onClick() {
    // this.toggle = !this.toggle;
    if(this.toggle == false){
      this.toggle = true
    }
    else if(this.toggle == true){
      this.toggle = false;
    }
  }

}
