const byuiCourse = {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    sections: [
      { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Andersen" },
      { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Andersen" },
      { sectionNum: 3, roomNum: "STC 347", enrolled: 30, days: "TTh", instructor: "Andersen" },
    ],
    enrollStudent(sectionNum) {
      const section = this.sections.find(sec => sec.sectionNum == sectionNum);
      if (section) section.enrolled++;
    },
    dropStudent(sectionNum) {
      const section = this.sections.find(sec => sec.sectionNum == sectionNum);
      if (section && section.enrolled > 0) section.enrolled--;
    },
    changeEnrollment(sectionNum, add = true) {
      if (add) {
        this.enrollStudent(sectionNum);
      } else {
        this.dropStudent(sectionNum);
      }
    }
  };
  
  export default byuiCourse;
  