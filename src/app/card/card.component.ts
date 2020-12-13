import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "Card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  constructor() {}
  @Input() title: string;
  @Input() path: string;
  @Input() desc: string;

  ngOnInit() {}
}
