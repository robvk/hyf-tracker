import { createModulePageHeader } from "../handlers/create-module-page/create-module-page-header.js";
import { createModulePageBody } from "../handlers/create-module-page/create-module-page-body.js";

export function renderModulePage(
  classNumber,
  moduleName,
  weeksNumber,
  activeWeek
) {
  createModulePageHeader(classNumber, moduleName, activeWeek);

  for (let weekNumber = 0; weekNumber < weeksNumber; weekNumber++) {
    createModulePageBody(classNumber, moduleName, weekNumber + 1);
  }
}
