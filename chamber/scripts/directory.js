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

  // Fetch and display members
  async function loadMembers() {
    try {
      const response = await fetch('data/members.json');
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      membersContainer.innerHTML = '<p>Error loading members data.</p>';
    }
  }

  function displayMembers(members) {
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
    switch(level) {
      case 1: return "Member";
      case 2: return "Silver";
      case 3: return "Gold";
      default: return "Member";
    }
  }

  // Toggle views
  gridViewBtn?.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
  });

  listViewBtn?.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
  });

  // Footer dates
  document.getElementById('copyright-year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();

  // Initial load
  loadMembers();
});
