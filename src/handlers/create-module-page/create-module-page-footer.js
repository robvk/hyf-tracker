import { createAndAttach } from "../../helpers/create-and-attach.js";
import { onClickEditBtn } from "../onclick-events/onclick-edit-btn.js";
import { onClickUpdateBtn } from "../onclick-events/onclick-update-btn.js";

export function createModulePageFooter(
  parent,
  classNumber,
  moduleName,
  weekNumber
) {
  const btnsWrapper = createAndAttach(`div`, parent, `append`, {
    classList: `footer-btns-wrapper`,
  });

  const editBtn = createAndAttach(`button`, btnsWrapper, `append`, {
    text: `Edit`,
    classList: `btn-footer btn-edit`,
    type: `submit`,
    "data-class-number": `${classNumber}`,
    "data-module-name": `${moduleName}`,
    "data-week-number": `${weekNumber}`,
  });
  editBtn.addEventListener("click", onClickEditBtn);

  const updateBtn = createAndAttach(`button`, btnsWrapper, `append`, {
    text: `Update`,
    classList: `btn-footer btn-update`,
    type: `submit`,
    "data-class-number": `${classNumber}`,
    "data-module-name": `${moduleName}`,
    "data-week-number": `${weekNumber}`,
  });
  updateBtn.addEventListener("click", onClickUpdateBtn);
}
