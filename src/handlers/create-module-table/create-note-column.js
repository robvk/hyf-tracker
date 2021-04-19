import { createAndAttach } from "../../helpers/create-and-attach.js";

export function createNoteColumn(parent, classNumber, moduleName, weekNumber) {
  const noteData = createAndAttach(`td`, parent, `after`, {
    classList: `note-data table-data`,
  });

  createAndAttach(`input`, noteData, `append`, {
    type: `text`,
    name: `fnote`,
    placeholder: `Type here...`,
    classList: `hide input-cell note-input ${classNumber}-${moduleName}-${weekNumber}`,
  });
  return noteData;
}
