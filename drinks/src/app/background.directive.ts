import { Renderer2, OnInit, HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appBackground]"
})
export class BackgroundDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}
  @HostListener("mouseenter")
  add() {
    let p = this.el.nativeElement;
    this.renderer.setStyle(p, "background-color", "gray");
  }
  @HostListener("mouseleave")
  remove() {
    let p = this.el.nativeElement;
    this.renderer.removeStyle(p, "background-color");
  }
}
