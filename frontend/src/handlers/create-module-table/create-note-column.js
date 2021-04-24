import { createAfter, createAndAppend } from '../../helpers/create-element.js';

export function createNoteColumn(parent, classNumber, moduleName, weekNumber) {
  const noteData = createAfter(`td`, parent, {
    classList: `note-data table-data`,
  });

  createAndAppend(`input`, noteData, {
    type: `text`,
    name: `fnote`,
    placeholder: `Type here...`,
    classList: `hide input-cell note-input ${classNumber}-${moduleName}-${weekNumber}`,
  });
  return noteData;
}
