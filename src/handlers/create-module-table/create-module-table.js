import { createAndAttach } from "../../helpers/create-and-attach.js";
import { createTableHead } from "../create-module-table/create-table-head.js";
import { createTableColumns } from "../create-module-table/create-table-columns.js";

export function createModuleTable(parent, classNumber, moduleName, weekNumber) {
  const table = createAndAttach(`table`, parent, `append`, {
    classList: `class-table`,
    "data-class-number": `${classNumber}`,
    "data-module-name": `${moduleName}`,
    "data-week-number": `${weekNumber}`,
  });

  const tBody = createAndAttach(`tbody`, table, `append`, {
    classList: `table-body`,
  });

  createTableHead(tBody);
  createTableColumns(tBody, classNumber, moduleName, weekNumber);
}
