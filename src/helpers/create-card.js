import { createAndAttach } from "./create-and-attach.js";

export function createCard(parent, list) {
  const card = createAndAttach(`div`, parent, `append`, {
    class: `card`,
  });
  const cardImage = createAndAttach(`div`, card, `append`, {
    class: `card-image`,
  });
  const img = createAndAttach(`img`, cardImage, `append`, {
    src: list.pic,
  });

  const cardTitle = createAndAttach(`div`, card, `append`, {
    text: list.name,
    class: `card-title`,
  });

  const cardContent = createAndAttach(`div`, card, `append`, {
    class: `card-content`,
  });

  const content1 = createAndAttach(`a`, cardContent, `append`, {
    href: list.assignedTickets,
    target: "_blank",
    text: `My assigned tickets`,
  });
  const content2 = createAndAttach(`a`, cardContent, `append`, {
    href: list.github,
    target: "_blank",
    text: `My github`,
  });
}
