import { createAndAppend } from './create-element.js';

export function createCard(parent, list) {
  const card = createAndAppend(`div`, parent, {
    class: `card`,
  });
  const cardImage = createAndAppend(`div`, card, {
    class: `card-image`,
  });
  const img = createAndAppend(`img`, cardImage, {
    src: list.pic,
  });

  const cardTitle = createAndAppend(`div`, card, {
    text: list.name,
    class: `card-title`,
  });

  const cardContent = createAndAppend(`div`, card, {
    class: `card-content`,
  });

  const content1 = createAndAppend(`a`, cardContent, {
    href: list.assignedTickets,
    target: '_blank',
    text: `My assigned tickets`,
  });
  const content2 = createAndAppend(`a`, cardContent, {
    href: list.github,
    target: '_blank',
    text: `My github`,
  });
}
