import { createAndAttach } from "../../helpers/create-and-attach.js";

export function createBody(parent) {
  const hero = createAndAttach(`div`, parent, `append`, {
    classList: `hero`,
  });

  createAndAttach(`div`, hero, `append`, {
    classList: `classes-wrapper`,
  });
}
