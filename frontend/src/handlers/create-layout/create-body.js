import { createAndAppend } from '../../helpers/create-element.js';

export function createBody(parent) {
  const hero = createAndAppend(`div`, parent, {
    classList: `hero`,
  });

  createAndAppend(`div`, hero, {
    classList: `classes-wrapper`,
  });
}
