import "jquery-mask-plugin/dist/jquery.mask"
import { LifeFormDropDown } from "./common/dropdown/LifeFormDropDown";
import { RadioGroup } from "./common/radio/radio-group"

new LifeFormDropDown('#life-dropdown');
new LifeFormDropDown('#other-life-dropdown');
new RadioGroup("#life-radio-group");