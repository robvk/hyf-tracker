import { createAndPrepend } from '../helpers/create-element.js';
import { createHeader } from '../handlers/create-layout/create-header.js';
import { createBody } from '../handlers/create-layout/create-body.js';

export function renderLayout() {
  const root = createAndPrepend(`div`, document.body, {
    classList: `root`,
  });

  createHeader(root);

  createBody(root);
}
