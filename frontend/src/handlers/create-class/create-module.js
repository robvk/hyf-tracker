import { createAndAppend } from '../../helpers/create-element.js';
import { onClickModule } from '../onclick-events/onclick-module.js';

export function createModule(classNumber, parent, list) {
  list.forEach((module) => {
    const moduleContainer = createAndAppend(`div`, parent, {
      classList: `module module-wrapper ${module.name}-module`,
      'data-class-number': `${classNumber}`,
      'data-module-name': `${module.name}`,
      'data-weeks-number': `${module.weeks}`,
    });
    moduleContainer.addEventListener('click', onClickModule);

    createAndAppend(`img`, moduleContainer, {
      classList: `logo module-logo ${module.name}-logo`,
      src: `public/assets/${module.name}.png`,
      alt: `${module.name} logo`,
    });

    createAndAppend(`p`, moduleContainer, {
      text: `${module.name}`,
      classList: `title module-title ${module.name}-title`,
    });

    const activeWeek = module.activeWeek;

    if (activeWeek) {
      createAndAppend(`p`, moduleContainer, {
        text: `week ${module.activeWeek}`,
        classList: `week module-week ${module.name}-week`,
      });

      moduleContainer.dataset.activeWeek = module.activeWeek;
    }
  });
}
