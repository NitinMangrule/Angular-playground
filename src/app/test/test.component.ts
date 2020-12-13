import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  data: string;
  flag = true;
  constructor() {}

  ngOnInit() {}

  handle(data) {
    console.log(data);
  }
}
