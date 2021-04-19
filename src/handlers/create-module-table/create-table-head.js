import { createAndAttach } from "../../helpers/create-and-attach.js";

export function createTableHead(tBody) {
  const tableHead = createAndAttach(`tr`, tBody, `append`, {
    classList: `table-row table-head`,
  });

  createAndAttach(`td`, tableHead, `append`, {
    text: `Date`,
    classList: `date-head table-head`,
  });

  createAndAttach(`td`, tableHead, `append`, {
    text: `Curriculum`,
    classList: `curriculum-head table-head`,
  });

  createAndAttach(`td`, tableHead, `append`, {
    text: `Other`,
    classList: `other-head table-head`,
  });

  createAndAttach(`td`, tableHead, `append`, {
    text: `Notes`,
    classList: `note-head table-head`,
  });
  return parent;
}
