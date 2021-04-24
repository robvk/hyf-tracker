import { query } from '../helpers/query-add-class.js';
import { createAndAppend } from '../helpers/create-element.js';
import { createCard } from '../helpers/create-card.js';

export function renderListCards(list, classNumber) {
  const hero = query(`.hero`);

  const cardsWrapper = createAndAppend(`div`, hero, {
    classList: `cards-wrapper`,
  });
  list.forEach((item) => {
    createCard(cardsWrapper, item);
  });
}
