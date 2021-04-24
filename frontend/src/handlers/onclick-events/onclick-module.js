import { wipe } from '../../helpers/wipe.js';
import { renderModulePage } from '../../views/render-module-page.js';

export function onClickModule(event) {
  wipe(`.hero`);

  let selectedModule;

  const parent = event.srcElement.children;
  if (!parent.length) {
    selectedModule = event.path[1];
  } else {
    selectedModule = event.target;
  }

  const classNumber = selectedModule.dataset.classNumber;

  const moduleName = selectedModule.dataset.moduleName;

  const weeksNumber = selectedModule.dataset.weeksNumber;

  const activeWeek = selectedModule.dataset.activeWeek;

  renderModulePage(classNumber, moduleName, weeksNumber, activeWeek);
}
