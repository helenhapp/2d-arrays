// magic.js
function drawPixelArt(matrix, titleText, palette) {
  // Знаходимо галерею
  const gallery = document.getElementById("gallery");

  // Створюємо контейнер для малюнка та заголовка
  const container = document.createElement("div");
  container.className = "art-container";

  // Додаємо заголовок (наприклад, "Мій Пейзаж")
  const title = document.createElement("div");
  title.className = "art-title";
  title.textContent = titleText;
  container.appendChild(title);

  // Створюємо саму сітку-полотно
  const canvas = document.createElement("div");
  canvas.className = "canvas";

  // Налаштовуємо кількість колонок залежно від першого рядка масиву
  const cols = matrix[0].length;
  canvas.style.gridTemplateColumns = `repeat(${cols}, 30px)`;

  // Перебираємо двовимірний масив (магія циклів!)
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel";

      const colorCode = matrix[y][x];

      // Якщо такий код є у нашій палітрі — фарбуємо
      if (palette[colorCode]) {
        pixel.style.backgroundColor = palette[colorCode];
      }

      canvas.appendChild(pixel);
    }
  }

  // Додаємо все на сторінку
  container.appendChild(canvas);
  gallery.appendChild(container);
}
