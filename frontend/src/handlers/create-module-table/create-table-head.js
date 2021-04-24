import { createAndAppend } from '../../helpers/create-element.js';

export function createTableHead(tBody) {
  const tableHead = createAndAppend(`tr`, tBody, {
    classList: `table-row table-head`,
  });

  createAndAppend(`td`, tableHead, {
    text: `Date`,
    classList: `date-head table-head`,
  });

  createAndAppend(`td`, tableHead, {
    text: `Curriculum`,
    classList: `curriculum-head table-head`,
  });

  createAndAppend(`td`, tableHead, {
    text: `Other`,
    classList: `other-head table-head`,
  });

  createAndAppend(`td`, tableHead, {
    text: `Notes`,
    classList: `note-head table-head`,
  });
  return parent;
}
