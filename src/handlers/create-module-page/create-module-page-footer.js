import { createAndAppend } from '../../helpers/create-element.js';
import { onClickEditBtn } from '../onclick-events/onclick-edit-btn.js';
import { onClickUpdateBtn } from '../onclick-events/onclick-update-btn.js';

export function createModulePageFooter(
  parent,
  classNumber,
  moduleName,
  weekNumber
) {
  const btnsWrapper = createAndAppend(`div`, parent, {
    classList: `footer-btns-wrapper`,
  });

  const editBtn = createAndAppend(`button`, btnsWrapper, {
    text: `Edit`,
    classList: `btn-footer btn-edit`,
    type: `submit`,
    'data-class-number': `${classNumber}`,
    'data-module-name': `${moduleName}`,
    'data-week-number': `${weekNumber}`,
  });
  editBtn.addEventListener('click', onClickEditBtn);

  const updateBtn = createAndAppend(`button`, btnsWrapper, {
    text: `Update`,
    classList: `btn-footer btn-update`,
    type: `submit`,
    'data-class-number': `${classNumber}`,
    'data-module-name': `${moduleName}`,
    'data-week-number': `${weekNumber}`,
  });
  updateBtn.addEventListener('click', onClickUpdateBtn);
}
