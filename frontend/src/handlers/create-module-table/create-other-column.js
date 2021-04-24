import { createAfter, createAndAppend } from '../../helpers/create-element.js';

export function createOtherColumn(parent, classNumber, moduleName, weekNumber) {
  const otherData = createAfter(`td`, parent, {
    classList: `other-data table-data`,
  });

  createAndAppend(`input`, otherData, {
    type: `text`,
    name: `fother`,
    placeholder: `Type here...`,
    classList: `hide input-cell other-input ${classNumber}-${moduleName}-${weekNumber}`,
  });

  return otherData;
}
