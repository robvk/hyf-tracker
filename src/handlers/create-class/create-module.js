import { createAndAttach } from '../../helpers/create-and-attach.js';
import { onClickModule } from '../onclick-events/onclick-module.js';

export function createModule(classNumber, parent, list) {
  list.forEach((module) => {
    const moduleContainer = createAndAttach(`div`, parent, `append`, {
      classList: `module module-wrapper ${module.name}-module`,
      'data-class-number': `${classNumber}`,
      'data-module-name': `${module.name}`,
      'data-weeks-number': `${module.weeks}`,
    });
    moduleContainer.addEventListener('click', onClickModule);

    createAndAttach(`img`, moduleContainer, `append`, {
      classList: `logo module-logo ${module.name}-logo`,
      src: `public/assets/${module.name}.png`,
      alt: `${module.name} logo`,
    });

    createAndAttach(`p`, moduleContainer, `append`, {
      text: `${module.name}`,
      classList: `title module-title ${module.name}-title`,
    });

    const activeWeek = module.activeWeek;

    if (activeWeek) {
      createAndAttach(`p`, moduleContainer, `append`, {
        text: `week ${module.activeWeek}`,
        classList: `week module-week ${module.name}-week`,
      });

      moduleContainer.dataset.activeWeek = module.activeWeek;
    }
  });
}
