import { query, queryAddClass } from '../../helpers/query-add-class.js';
import {
  createAndAppend,
  createBefore,
  createAfter,
} from '../../helpers/create-element.js';
import { onClickList } from '../onclick-events/onclick-list.js';

export function createModulePageHeader(classNumber, moduleName, activeWeek) {
  queryAddClass(`.btn-header`, `hide`, true);

  const dateWrapper = query(`.date-wrapper`);

  const leftWrapper = createBefore(`div`, dateWrapper, {
    classList: `column-wrapper class-title-wrapper`,
  });

  createAndAppend(`p`, leftWrapper, {
    text: `${classNumber}`,
    classList: `sub-title class-sub-title`,
  });

  const studentsList = createAndAppend(`p`, leftWrapper, {
    id: `students-list-btn`,
    text: `students list`,
    classList: `sub-title students-sub-title btn-header`,
    'data-class-number': `${classNumber}`,
  });
  studentsList.addEventListener('click', onClickList);

  const rightWrapper = createAfter(`div`, dateWrapper, {
    classList: `column-wrapper module-title-wrapper`,
  });
  const subTitle = createAndAppend(`p`, rightWrapper, {
    text: `${moduleName}`,
    classList: `sub-title module-sub-title`,
  });
  if (activeWeek) {
    subTitle.textContent += ` - week${activeWeek}`;
  }
  const mentorsList = createAndAppend(`p`, rightWrapper, {
    id: `mentors-list-btn`,
    text: `mentors list`,
    classList: `sub-title mentors-sub-title btn-header`,
  });
  mentorsList.addEventListener('click', onClickList);
}
