function createElement(elementType, options = {}) {
  const element = document.createElement(elementType);

  Object.entries(options).forEach(([key, value]) => {
    if (key === `text`) {
      element.textContent = value;
    } else if (key === `classList`) {
      element.classList += value;
    } else {
      element.setAttribute(key, value);
    }
  });

  return element;
}

export function createAndAppend(elementType, parent, options = {}) {
  const element = createElement(elementType, options);
  parent.append(element);
  return element;
}

export function createAndPrepend(elementType, parent, options = {}) {
  const element = createElement(elementType, options);
  parent.prepend(element);
  return element;
}

export function createAfter(elementType, parent, options = {}) {
  const element = createElement(elementType, options);
  parent.after(element);
  return element;
}

export function createBefore(elementType, parent, options = {}) {
  const element = createElement(elementType, options);
  parent.before(element);
  return element;
}
