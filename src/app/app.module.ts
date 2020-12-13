import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CardComponent } from "./card/card.component";
import { TestComponent } from "./test/test.component";
import { HighlightDirective } from "../highlight.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CardComponent,
    TestComponent,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
