import { createAndAttach } from "../../helpers/create-and-attach.js";

export function createOtherColumn(parent, classNumber, moduleName, weekNumber) {
  const otherData = createAndAttach(`td`, parent, `after`, {
    classList: `other-data table-data`,
  });

  createAndAttach(`input`, otherData, `append`, {
    type: `text`,
    name: `fother`,
    placeholder: `Type here...`,
    classList: `hide input-cell other-input ${classNumber}-${moduleName}-${weekNumber}`,
  });

  return otherData;
}
