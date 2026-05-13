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

// const fruits = [
//   ["🍎", "🍐", "🍏"],
//   ["🍋", "🍊", "🥝"],
// ];

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

// const farm = [
//   ["🐄", "🐄"],
//   ["🌾", "🌾"],
// ];
 
// farm.shift(); // 1. Видаляємо перший рядок (корови пішли на пасовище)
 
// farm.unshift(["🐓", "🐓"]); // 2. Додаємо курей у новий перший рядок
 
// farm[0].unshift("🐕"); // 3. Додаємо собаку на початок першого рядка
// farm[1].unshift("🚜"); // 4. Додаємо трактор на початок другого рядка
 
// console.log(farm);

// const forest = [
//   ["🌲", "🌲", "🌲", "🌲", "🌲"],
//   ["🌲", "🌲", "🌲", "🌲", "🌲"]
// ];
 
// // У першому рядку (індекс 0),
// // починаючи з 2-ї позиції (індекс 1),
// // видалимо два дерева (2)
// // і додамо замість них гриби ("🍄", "🍄"):
 
// forest[0].splice(1, 2, "🍄", "🍄");
 
// console.log(forest);

// const farm = [
//   ["🐄", "🐄"],
//   ["🌾", "🌾"],
// ];
 
// // Видаляємо перший рядок 
// farm.shift(); 
 
//  // Додаємо курей як новий перший рядок
// farm.unshift(["🐓", "🐓"]);
 
// // Видаляємо курку на початку першого рядка
// farm[0].shift(); 
 
// // Додаємо собаку на початок першого рядка
// farm[0].unshift("🐕"); 
 
// console.log(farm);

// для кожного рядка масиву
// for (let row of fruits) {
//   console.log(row);
  
//   // для кожної клітинки цього рядка
//   for (let cell of row) {
//     console.log(cell);
//   }
// }

const fruits = [
  ["🍎", "🍐", "🍏"],
  ["🍋", "🍊", "🥝"],
];

fruits.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    // Тепер ми знаємо і сам фрукт, і його точну адресу
    console.log(`[${rowIndex}][${colIndex}] = ${cell}`);
  });
});
