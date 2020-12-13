import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  @Input() defaultColor = "transperent";
  @Input("appHighlight") updatedColor = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //  this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.backgroundColor = this.defaultColor;
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
    this.backgroundColor = this.updatedColor;
  }

  @HostListener("mouseleave") mouseLeave() {
    this.backgroundColor = this.defaultColor;
  }
}
