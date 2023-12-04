
import { initShowMenu } from './show.js'
import { initGliders } from "./glide.js";
import { initForm } from './form.js';
import { initCountUp } from './counter.js';
import { initDialog } from './dialog.js';
import { initFilter } from './filter.js';



document.addEventListener("DOMContentLoaded", () => {
  initShowMenu();
  initCountUp();
  initGliders();
  initForm();
  initDialog();
  initFilter();
});
