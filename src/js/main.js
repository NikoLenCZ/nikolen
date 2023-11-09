
import { initShowMenu } from './show.js'
import { initTabs } from "./tabs";
import { initGliders } from "./glide.js";
import { initForm } from './form.js';
import { initCountUp } from './counter.js';



document.addEventListener("DOMContentLoaded", () => {
  initShowMenu();
  initCountUp();
  initTabs();
  initGliders();
  initForm();
});
