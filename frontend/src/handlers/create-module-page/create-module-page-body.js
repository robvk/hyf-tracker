import { query } from '../../helpers/query-add-class.js';
import {
  createAndAppend,
  createAndPrepend,
} from '../../helpers/create-element.js';
import { createModuleTable } from '../create-module-table/create-module-table.js';
import { createModulePageFooter } from '../create-module-page/create-module-page-footer.js';

export function createModulePageBody(classNumber, moduleName, weekNumber) {
  const hero = query(`.hero`);

  const bodyWrapper = createAndAppend(`div`, hero, {
    classList: `module-page-wrapper`,
  });

  const tableWrapper = createAndAppend(`div`, bodyWrapper, {
    classList: `table-wrapper`,
  });

  createAndPrepend(`p`, tableWrapper, {
    text: `Week ${weekNumber}`,
    classList: `week-number`,
  });

  createModuleTable(tableWrapper, classNumber, moduleName, weekNumber);

  createModulePageFooter(tableWrapper, classNumber, moduleName, weekNumber);
}
