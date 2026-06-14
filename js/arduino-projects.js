const projectList = document.querySelector("#arduino-project-list");

fetch("../../data/arduino-projects.json")
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("arduino-card");

      card.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <p><strong>Seviye:</strong> ${project.level}</p>
        <p><strong>Malzemeler:</strong> ${project.components.join(", ")}</p>
      `;

      projectList.appendChild(card);
    });
  });
