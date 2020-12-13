import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @HostBinding("style.backgroundColor") backgroundColor: string ='transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //  this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "green"
    );
  }

  // @HostListener("mouseenter") mouseEnter() {
  //   this.renderer.setStyle(this.elRef.nativeElement, "background-color", "red");
  // }

  // @HostListener("mouseleave") mouseLeave() {
  //   this.renderer.setStyle(
  //     this.elRef.nativeElement,
  //     "background-color",
  //     "transparent"
  //   );
  // }

  @HostListener("mouseenter") mouseEnter() {
    this.backgroundColor = "red";
  }

  @HostListener("mouseleave") mouseLeave() {
    this.backgroundColor = "yellow";
  }
}
