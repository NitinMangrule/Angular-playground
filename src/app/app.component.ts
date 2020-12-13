import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  title = "Burger King";
  dishData = [
    {
      title: "Burger",
      imgPath: "https://foodish-api.herokuapp.com/images/burger/burger48.jpg",
      description:
        "The Best Burger Recipe! Sharing our secrets for making restaurant quality burgers, from the juiciest burger patties to the best buns and burger"
    },
    {
      title: "Biryani",
      imgPath: "https://foodish-api.herokuapp.com/images/biryani/biryani9.jpg",
      description:
        "The Best Burger Recipe! Sharing our secrets for making restaurant quality burgers, from the juiciest burger patties to the best buns and burger"
    },
    {
      title: "Dosa",
      imgPath: "https://foodish-api.herokuapp.com/images/dosa/dosa67.jpg",
      description:
        "The Best Burger Recipe! Sharing our secrets for making restaurant quality burgers, from the juiciest burger patties to the best buns and burger"
    },
    {
      title: "Idly",
      imgPath: "https://foodish-api.herokuapp.com/images/idly/idly47.jpg",
      description:
        "The Best Burger Recipe! Sharing our secrets for making restaurant quality burgers, from the juiciest burger patties to the best buns and burger"
    },
    {
      title: "Pizza",
      imgPath: "https://foodish-api.herokuapp.com/images/pizza/pizza30.jpg",
      description:
        "The Best Burger Recipe! Sharing our secrets for making restaurant quality burgers, from the juiciest burger patties to the best buns and burger"
    }
  ];
}
