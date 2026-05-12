// const matrix = [
//   [1, 2, 3], // рядок 1
//   [4, 5, 6], // рядок 2
//   [7, 8, 9], // рядок 3
// ];

// console.log(matrix);

// const inverntory = [
//   ["⚔️", "🛡️", "🧪"],
//   ["🍎", "🍕", "🍩"],
//   ["👒", "🧣", "🧦"],
// ];

// console.log("Food:", inverntory[1]);

// console.log("Donut:", inverntory[1][2]);

// const map = [
//   ["🌱", "🌱"],
//   ["🌱", "🌱"],
// ];

// map[0][1] = "🌻";
// map[1][0] = "🌷";

// console.log(map);

// const garden = [
//   ["🌻", "🌻"],
//   ["🌷", "🌷"],
// ];

// garden.pop(); // 1. Видаляємо останній рядок

// garden.push(["🌸", "🌸", "🌸"]); // 2. Додаємо новий рядок в кінці масиву

// garden[0].push("🌻"); // 3. Додаємо одну квітку в 1-й рядок

// console.log(garden);

// const treasureMap = [
//     ["🏖️", "🌴", "💎", "🌴"],
//     ["🏖️", "🌴", "🏖️", "🏖️"],
// ];

// console.log("Рядків:", treasureMap.length);

// console.log("Колонок:", treasureMap[0].length);

const fruits = [
  ["🍎", "🍐", "🍏"],
  ["🍋", "🍊", "🥝"],
];

// // Перебираємо рядки
// for (let row = 0; row < fruits.length; row++) {
//   console.log(`Рядок ${row}:`, fruits[row]);
// }

// console.log("\n");

// // Перебираємо рядки
// for (let row = 0; row < fruits.length; row++) {
//   // Перебираємо клітинки в поточному рядку
//   for (let col = 0; col < fruits[row].length; col++) {
//     console.log(`Рядок ${row}, колонка ${col}:`, fruits[row][col]);
//   }
// }

// // для кожного рядка масиву
// for (let row of fruits) {
//   // для кожної клітинки цього рядка
//   for (let cell of row) {
//     console.log(cell);
//   }
// }

// fruits.forEach(function (row) {
//   row.forEach(function (cell) {
//     console.log(cell);
//   });
// });

// fruits.forEach((row) => {
//   row.forEach((cell) => {
//     console.log(cell);
//   });
// });

// 0 - blue (sky)
// 1 - yellow (sun)
// 2 - darkgreen (tree)
// 3 - brown (tree trunk)
// 4 - lightgreen (grass)

// const landscape = [
//   [1, 0, 2, 2, 2],
//   [0, 0, 2, 2, 2],
//   [0, 0, 0, 3, 0],
//   [4, 4, 4, 4, 4],
//   [4, 4, 4, 4, 4],
// ];
