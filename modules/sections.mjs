export function setSectionSelection(sections) {
    const selectElement = document.querySelector("#sectionNumber");
    sections.forEach((section) => {
      const option = document.createElement("option");
      option.value = section.sectionNum;
      option.textContent = section.sectionNum;
      selectElement.appendChild(option);
    });
  }
  