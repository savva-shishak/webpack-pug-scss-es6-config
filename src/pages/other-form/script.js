import { RadioGroup } from "../../common/radio/radio-group"
import { ExampleCheckboxGroup } from "../../common/checkbox/example";
import { Toggle } from "../../common/toggle/toggle";
import { Like } from "../../common/like/like";
import { Ratting } from "../../common/rating/rating"
import { SliderFromTo } from "../../common/slider/sliderFromTo";
import { SliderMoney } from "../../common/sliderMoney/SliderMoney";

new RadioGroup("#life-radio-group");

new ExampleCheckboxGroup('#checkbox-example');
new Toggle("#toggle-example");
new Like("#life-like-example");
new Ratting("#life-example-rating");
new SliderFromTo("#life-slider-example1", {step: 1/20});
new SliderFromTo("#life-slider-example2", {step: 1/3});
new SliderMoney("#life-slider-example-money");
new SliderFromTo("#life-single-slider", {step: 1/25})