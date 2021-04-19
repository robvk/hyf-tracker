import { query } from "../helpers/query-add-class.js";
import { createAndAttach } from "../helpers/create-and-attach.js";
import { createCard } from "../helpers/create-card.js";

export function renderListCards(list, classNumber) {
  const hero = query(`.hero`);

  const cardsWrapper = createAndAttach(`div`, hero, `append`, {
    classList: `cards-wrapper`,
  });
  list.forEach((item) => {
    createCard(cardsWrapper, item);
  });
}
