import { wipe } from "../../helpers/wipe.js";
import { renderListCards } from "../../views/render-list-cards.js";
import { studentsList, mentorsList } from "../../data.js";

export function onClickList(event) {
  wipe(`.hero`);
  const selectedList = event.target;
  const classNumber = selectedList.dataset.classNumber;

  if (selectedList.id === `mentors-list-btn`) {
    renderListCards(mentorsList, classNumber);
  } else {
    renderListCards(studentsList, classNumber);
  }
}
