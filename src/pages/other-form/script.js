import { RadioGroup } from "../../common/radio/radio-group"
import { ExampleCheckboxGroup } from "../../common/checkbox/example";
import { Toggle } from "../../common/toggle/toggle";
import { Like } from "../../common/like/like";
import { Ratting } from "../../common/rating/rating"

import { Line } from "../../common/slider/line";
import "../../common/slider/slider.scss";
import { Expandable } from "../../common/dropdown/dropdown";

new RadioGroup("#life-radio-group");

new ExampleCheckboxGroup('#checkbox-example');
new Toggle("#toggle-example");
new Like("#life-like-example");
new Ratting("#life-example-rating");
new Expandable("#life-expandable");

const doubleSlider = new Line("#slider-from-to-example");

doubleSlider.to = .6;
doubleSlider.from = .2;

console.log(doubleSlider);

const simpleSlider = new Line("#slider-to-example");

simpleSlider.to = .8;