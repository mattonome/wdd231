// modules.mjs
import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';

document.addEventListener("DOMContentLoaded", () => {
  // Set course title and populate section options on page load
  setTitle(byuiCourse);
  setSectionSelection(byuiCourse.sections);

  // Event listeners for enroll and drop buttons
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
  });

  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
  });
});
