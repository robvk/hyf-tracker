import { createNewClass } from '../create-class/create-new-class.js';

export function getClassNumber() {
  //TODO: spend sometime on something better
  let classNumber = prompt('Enter number for the new class');
  if (classNumber) {
    classNumber = `class${classNumber}`;
    createNewClass(classNumber);
  }
}
