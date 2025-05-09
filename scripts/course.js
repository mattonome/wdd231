// course.js
// Renders and filters course cards dynamically

document.addEventListener("DOMContentLoaded", () => {
    const courseContainer = document.getElementById("courseContainer");
    const totalCreditsSpan = document.getElementById("totalCredits");
  
    const courses = [
      { code: "WDD 130", name: "Web Fundamentals", credits: 3, category: "WDD", completed: true },
      { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, category: "WDD", completed: true },
      { code: "WDD 231", name: "Front-end Web Development I", credits: 3, category: "WDD", completed: false },
      { code: "CSE 110", name: "Introduction to Programming", credits: 2, category: "CSE", completed: true },
      { code: "CSE 111", name: "Programming with Functions", credits: 2, category: "CSE", completed: false },
      { code: "CSE 210", name: "Programming with Classes", credits: 2, category: "CSE", completed: false }
    ];
  
    function renderCourses(filterFn = () => true) {
      if (!courseContainer || !totalCreditsSpan) return;
      courseContainer.innerHTML = "";
      let total = 0;
  
      courses.filter(filterFn).forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card" + (course.completed ? " completed" : "");
        card.innerHTML = `
          <strong>${course.code}</strong>: ${course.name}
          &mdash; ${course.credits} credit${course.credits > 1 ? "s" : ""}
        `;
        courseContainer.appendChild(card);
        total += course.credits;
      });
  
      totalCreditsSpan.textContent = total;
    }
  
    // initial render
    renderCourses();
  
    // filter buttons
    document.getElementById("allBtn")?.addEventListener("click", () => renderCourses());
    document.getElementById("wddBtn")?.addEventListener("click", () => 
      renderCourses(c => c.category === "WDD")
    );
    document.getElementById("cseBtn")?.addEventListener("click", () => 
      renderCourses(c => c.category === "CSE")
    );
  });
  