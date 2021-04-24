import { query } from '../../helpers/query-add-class.js';
import { createAndAppend } from '../../helpers/create-element.js';
import { createModule } from './create-module.js';
import { modules } from '../../data.js';

export function createNewClass(classNumber) {
  const classesWrapper = query(`.classes-wrapper`);

  const classContainer = createAndAppend(`div`, classesWrapper, {
    classList: `class-container`,
    'data-class-number': `${classNumber}`,
  });

  const titleContainer = createAndAppend(`div`, classContainer, {
    classList: `title-container`,
  });

  createAndAppend(`p`, titleContainer, {
    text: `${classNumber}`,
    classList: `title class-title`,
  });

  createModule(classNumber, classContainer, modules);
}
