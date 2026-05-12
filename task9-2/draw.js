// Початковий ландшафт (схований від учнів)
const terrainMap = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
];

// Копія для об'єктів (доступна учням)
const worldMap = terrainMap.map((row) => [...row]);

/**
 * Малює карту, використовуючи внутрішні масиви worldMap та terrainMap
 */
function drawWorldMap() {
  const container = document.getElementById("map-container");

  if (!container) return;
  container.innerHTML = "";

  // Налаштовуємо сітку за розміром масиву
  container.style.gridTemplateColumns = `repeat(${worldMap[0].length}, 60px)`;

  for (let y = 0; y < worldMap.length; y++) {
    for (let x = 0; x < worldMap[y].length; x++) {
      const tile = document.createElement("div");
      tile.className = "tile";

      // Фарбуємо фон (0 - трава, 1 - вода)
      const terrainType = terrainMap[y][x];
      if (terrainType === 0) {
        tile.style.backgroundColor = "#47a02e";
      } else if (terrainType === 1) {
        tile.style.backgroundColor = "cornflowerblue";
      }

      // Додаємо об'єкт, якщо він там є
      const content = worldMap[y][x];
      if (content !== 0 && content !== 1) {
        tile.textContent = content;
      }

      container.appendChild(tile);
    }
  }
}

worldMap[2][2] = "🏠";
worldMap[4][4] = "⛵️";