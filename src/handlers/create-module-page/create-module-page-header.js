import { query, queryAddClass } from '../../helpers/query-add-class.js';
import { createAndAttach } from '../../helpers/create-and-attach.js';
import { onClickList } from '../onclick-events/onclick-list.js';

export function createModulePageHeader(classNumber, moduleName, activeWeek) {
  queryAddClass(`.btn-header`, `hide`, true);

  const dateWrapper = query(`.date-wrapper`);

  const leftWrapper = createAndAttach(`div`, dateWrapper, `before`, {
    classList: `column-wrapper class-title-wrapper`,
  });

  createAndAttach(`p`, leftWrapper, `append`, {
    text: `${classNumber}`,
    classList: `sub-title class-sub-title`,
  });

  const studentsList = createAndAttach(`p`, leftWrapper, `append`, {
    id: `students-list-btn`,
    text: `students list`,
    classList: `sub-title students-sub-title btn-header`,
    'data-class-number': `${classNumber}`,
  });
  studentsList.addEventListener('click', onClickList);

  const rightWrapper = createAndAttach(`div`, dateWrapper, `after`, {
    classList: `column-wrapper module-title-wrapper`,
  });
  const subTitle = createAndAttach(`p`, rightWrapper, `append`, {
    text: `${moduleName}`,
    classList: `sub-title module-sub-title`,
  });
  if (activeWeek) {
    subTitle.textContent += ` - week${activeWeek}`;
  }
  const mentorsList = createAndAttach(`p`, rightWrapper, `append`, {
    id: `mentors-list-btn`,
    text: `mentors list`,
    classList: `sub-title mentors-sub-title btn-header`,
  });
  mentorsList.addEventListener('click', onClickList);
}
