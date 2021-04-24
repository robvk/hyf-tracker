import { query } from "./query-add-class.js";

export function wipe(name) {
  query(name).innerHTML = ``;
}
