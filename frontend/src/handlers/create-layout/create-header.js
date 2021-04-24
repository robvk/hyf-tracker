import { createAndAppend } from '../../helpers/create-element.js';

export function createHeader(parent) {
  const header = createAndAppend(`header`, parent, {
    classList: `header`,
  });

  createAndAppend(`button`, header, {
    text: `Add new class`,
    classList: `btn btn-header btn-add-class`,
    id: `btn-add-class`,
  });

  const dateWrapper = createAndAppend(`div`, header, {
    classList: `date-wrapper`,
  });

  createAndAppend(`p`, dateWrapper, {
    text: new Date().toLocaleDateString(),
    classList: `text date-text`,
  });

  createAndAppend(`button`, header, {
    text: `Holiday calender`,
    classList: `btn btn-header btn-holiday-calendar`,
    type: `submit`,
  });
}
