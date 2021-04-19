export function createAndAttach(child, parent, method, options = {}) {
  const el = document.createElement(child);

  switch (method) {
    case `prepend`:
      parent.prepend(el);
      break;

    case `append`:
      parent.append(el);
      break;

    case `before`:
      parent.before(el);
      break;

    case `after`:
      parent.after(el);
      break;
  }

  Object.entries(options).forEach(([key, value]) => {
    if (key === `text`) {
      el.textContent = value;
    } else if (key === `classList`) {
      el.classList += value;
    } else {
      el.setAttribute(key, value);
    }
  });

  return el;
}
