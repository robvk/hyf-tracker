import { createAndAppend } from '../../helpers/create-element.js';
import { createTableHead } from '../create-module-table/create-table-head.js';
import { createTableColumns } from '../create-module-table/create-table-columns.js';

export function createModuleTable(parent, classNumber, moduleName, weekNumber) {
  const table = createAndAppend(`table`, parent, {
    classList: `class-table`,
    'data-class-number': `${classNumber}`,
    'data-module-name': `${moduleName}`,
    'data-week-number': `${weekNumber}`,
  });

  const tBody = createAndAppend(`tbody`, table, {
    classList: `table-body`,
  });

  createTableHead(tBody);
  createTableColumns(tBody, classNumber, moduleName, weekNumber);
}
