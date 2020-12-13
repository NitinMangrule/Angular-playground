import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //  this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "green"
    );
  }
}
