// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    //
    // 1. Date handling (was in date.js)
    //
    const yearSpan = document.getElementById("currentYear");
    const lastModified = document.getElementById("lastModified");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModified) {
      lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
  
    //
    // 2. Navigation toggle stub (was in navigation.js)
    //
    // You can wire up your hamburger toggle here if/when you add one:
    // const menuButton = document.getElementById("menuToggle");
    // const navUL = document.querySelector("nav ul");
    // menuButton?.addEventListener("click", () => {
    //   navUL.classList.toggle("open");
    // });
  
    //
    // 3. Course rendering & filtering (was in course.js)
    //
    const courseContainer = document.getElementById("courseContainer") ||
                            document.getElementById("course-list");
    const totalCreditsSpan = document.getElementById("totalCredits") ||
                             document.getElementById("total-credits");
  
    const courses = [
      { code: "WDD 130", name: "Web Fundamentals", credits: 3, category: "WDD", completed: true },
      { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, category: "WDD", completed: true },
      { code: "WDD 231", name: "Front-end Web Development I", credits: 3, category: "WDD", completed: false },
      { code: "CSE 110", name: "Introduction to Programming", credits: 2, category: "CSE", completed: true },
      { code: "CSE 111", name: "Programming with Functions", credits: 2, category: "CSE", completed: false },
    ];
  
    function renderCourses(filterFn = () => true) {
      if (!courseContainer || !totalCreditsSpan) return;
      courseContainer.innerHTML = "";
      let totalCredits = 0;
      courses.filter(filterFn).forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card" + (course.completed ? " completed" : "");
        card.innerHTML = `
          <strong>${course.code}</strong>: ${course.name}
          &mdash; ${course.credits} credit${course.credits > 1 ? "s" : ""}
        `;
        courseContainer.appendChild(card);
        totalCredits += course.credits;
      });
      totalCreditsSpan.textContent = totalCredits;
    }
  
    // Initial load
    renderCourses();
  
    // Button listeners
    document.getElementById("allBtn")?.addEventListener("click", () => renderCourses());
    document.getElementById("wddBtn")?.addEventListener("click",
      () => renderCourses(c => c.category === "WDD"));
    document.getElementById("cseBtn")?.addEventListener("click",
      () => renderCourses(c => c.category === "CSE"));
  });
  