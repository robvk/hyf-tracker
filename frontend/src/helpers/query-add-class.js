export function query(name, all) {
  let el;

  if (all) {
    el = document.querySelectorAll(name);
  } else {
    el = document.querySelector(name);
  }
  return el;
}

export function addClass(el, value) {
  if (NodeList.prototype.isPrototypeOf(el)) {
    el.forEach((node) => {
      node.classList += ` ${value}`;
    });
  } else {
    el.classList += ` ${value}`;
  }
}

export function queryAddClass(name, value, all) {
  const el = query(name, all);
  addClass(el, value);
  return el;
}
