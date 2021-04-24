import { query } from "../../helpers/query-add-class.js";

export function onClickEditBtn(event) {
  const selectedBtn = event.target;
  const btnDataset = `${selectedBtn.dataset.classNumber}-${selectedBtn.dataset.moduleName}-${selectedBtn.dataset.weekNumber}`;

  const cells = query(`.${btnDataset}`, true);

  cells.forEach((cell) => {
    cell.classList.remove(`hide`);
  });
}
