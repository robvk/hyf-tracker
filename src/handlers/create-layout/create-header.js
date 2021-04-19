import { createAndAttach } from "../../helpers/create-and-attach.js";

export function createHeader(parent) {
  const header = createAndAttach(`header`, parent, `append`, {
    classList: `header`,
  });

  createAndAttach(`button`, header, `append`, {
    text: `Add new class`,
    classList: `btn btn-header btn-add-class`,
    id: `btn-add-class`,
  });

  const dateWrapper = createAndAttach(`div`, header, `append`, {
    classList: `date-wrapper`,
  });

  createAndAttach(`p`, dateWrapper, `append`, {
    text: new Date().toLocaleDateString(),
    classList: `text date-text`,
  });

  createAndAttach(`button`, header, `append`, {
    text: `Holiday calender`,
    classList: `btn btn-header btn-holiday-calendar`,
    type: `submit`,
  });
}
