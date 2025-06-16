// === Navigation Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      toggleBtn.textContent = navLinks.classList.contains("show") ? "X" : "☰";
    });
  }

  // === Directory Logic ===
  const membersContainer = document.getElementById('members-container');
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');

  async function loadMembers() {
    try {
      const response = await fetch('data/members.json');
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      if (membersContainer) {
        membersContainer.innerHTML = '<p>Error loading members data.</p>';
      }
    }
  }

  function displayMembers(members) {
    if (!membersContainer) return;
    membersContainer.innerHTML = '';

    members.forEach(member => {
      const card = document.createElement('article');
      card.classList.add('member-card');

      card.innerHTML = `
        <img src="../images/${member.image}" alt="Logo of ${member.name}" class="member-image">
        <h3>${member.name}</h3>
        <p>${member.intro || ''}</p>
        <hr class="member-divider">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
        <p>Membership Level: ${membershipLevelName(member.membershipLevel)}</p>
        <p>${member.description}</p>
      `;

      membersContainer.appendChild(card);
    });
  }

  function membershipLevelName(level) {
    switch (Number(level)) {
      case 1: return "Member";
      case 2: return "Silver";
      case 3: return "Gold";
      default: return "Member";
    }
  }

  // === Wayfinder Function ===
  function highlightCurrentPage() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href");
      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  }

  // === View Toggle Buttons ===
  gridViewBtn?.addEventListener('click', () => {
    membersContainer?.classList.add('grid-view');
    membersContainer?.classList.remove('list-view');
  });

  listViewBtn?.addEventListener('click', () => {
    membersContainer?.classList.add('list-view');
    membersContainer?.classList.remove('grid-view');
  });

  // === Footer Info ===
  const copyright = document.getElementById('copyright-year');
  const lastMod = document.getElementById('last-modified');

  if (copyright) copyright.textContent = new Date().getFullYear();
  if (lastMod) lastMod.textContent = new Date(document.lastModified).toLocaleDateString();

  // === INITIAL LOAD ===
  loadMembers();
  highlightCurrentPage(); // 👈 This ensures the current page nav link is highlighted
});
