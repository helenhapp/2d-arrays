// magic.js

// Створюємо початкову порожню карту
const map = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// Функція для малювання сітки
function drawMap() {
  const mapContainer = document.querySelector("#map-container");

  if (!mapContainer) return;
  mapContainer.innerHTML = ""; // Очищаємо контейнер перед малюванням

  for (let i = 0; i < map.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < map[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      // Додаємо текст (емоджі) з масиву
      cell.textContent = map[i][j];

      row.appendChild(cell);
    }

    mapContainer.appendChild(row);
  }
}
