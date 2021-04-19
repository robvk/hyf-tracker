import { createAndAttach } from "../helpers/create-and-attach.js";
import { createHeader } from "../handlers/create-layout/create-header.js";
import { createBody } from "../handlers/create-layout/create-body.js";

export function renderLayout() {
  const root = createAndAttach(`div`, document.body, `prepend`, {
    classList: `root`,
  });

  createHeader(root);

  createBody(root);
}
