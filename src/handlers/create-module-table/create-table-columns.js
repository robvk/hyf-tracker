import { createAndAppend } from '../../helpers/create-element.js';
import { createActivitiesColumn } from '../create-module-table/create-activities-column.js';
import { createOtherColumn } from '../create-module-table/create-other-column.js';
import { createNoteColumn } from '../create-module-table/create-note-column.js';
import { weekDays } from '../../data.js';

export function createTableColumns(tBody, classNumber, moduleName, weekNumber) {
  weekDays.forEach((day, idx) => {
    const dayRow = createAndAppend(`tr`, tBody, {
      classList: `day-row table-row`,
      'data-day-row': `${day.dayName}_${day.date}`,
    });

    const dayData = createAndAppend(`td`, dayRow, {
      text: `${day.dayName}\n${day.date}`,
      classList: `day-data table-data`,
    });

    const activityData = createActivitiesColumn(dayData, idx);

    const otherData = createOtherColumn(
      activityData,
      classNumber,
      moduleName,
      weekNumber
    );

    createNoteColumn(otherData, classNumber, moduleName, weekNumber);
  });
}
