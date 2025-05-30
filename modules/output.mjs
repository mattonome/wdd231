export function setTitle(course) {
    const titleElement = document.querySelector("#courseTitle");
    titleElement.textContent = `${course.code}: ${course.name}`;
  }
  
  export function renderSections(sections) {
    const sectionElement = document.querySelector("#sections");
    sectionElement.innerHTML = "";
  
    sections.forEach((section) => {
      const li = document.createElement("li");
      li.textContent = `Section ${section.sectionNum} | Room: ${section.roomNum} | Enrolled: ${section.enrolled} | Days: ${section.days} | Instructor: ${section.instructor}`;
      sectionElement.appendChild(li);
    });
  }
  