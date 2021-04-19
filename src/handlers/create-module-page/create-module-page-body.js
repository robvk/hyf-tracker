import { query } from "../../helpers/query-add-class.js";
import { createAndAttach } from "../../helpers/create-and-attach.js";
import { createModuleTable } from "../create-module-table/create-module-table.js";
import { createModulePageFooter } from "../create-module-page/create-module-page-footer.js";

export function createModulePageBody(classNumber, moduleName, weekNumber) {
  const hero = query(`.hero`);

  const bodyWrapper = createAndAttach(`div`, hero, `append`, {
    classList: `module-page-wrapper`,
  });

  const tableWrapper = createAndAttach(`div`, bodyWrapper, `append`, {
    classList: `table-wrapper`,
  });

  createAndAttach(`p`, tableWrapper, `prepend`, {
    text: `Week ${weekNumber}`,
    classList: `week-number`,
  });

  createModuleTable(tableWrapper, classNumber, moduleName, weekNumber);

  createModulePageFooter(tableWrapper, classNumber, moduleName, weekNumber);
}
