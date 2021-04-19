import { query } from '../../helpers/query-add-class.js';
import { createAndAttach } from '../../helpers/create-and-attach.js';
import { createModule } from './create-module.js';
import { modules } from '../../data.js';

export function createNewClass(classNumber) {
  const classesWrapper = query(`.classes-wrapper`);

  const classContainer = createAndAttach(`div`, classesWrapper, `append`, {
    classList: `class-container`,
    'data-class-number': `${classNumber}`,
  });

  const titleContainer = createAndAttach(`div`, classContainer, `append`, {
    classList: `title-container`,
  });

  createAndAttach(`p`, titleContainer, `append`, {
    text: `Class ${classNumber}`,
    classList: `title class-title`,
  });

  createModule(classNumber, classContainer, modules);
}
