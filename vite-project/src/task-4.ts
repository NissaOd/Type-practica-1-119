// Массив только чисел (ширина, высота)
const dimensions: number[] = [1920, 1080];

// Кортеж: ширина, высота, ориентация
const dim: [number, number, "album" | "portrait"] = [1920, 1080, "album"];

// Выводим в консоль
console.log(dimensions, dim);

// Пример списка экранов (массив кортежей)
const screenDimensions: [number, number, "album" | "portrait"][] = [
  [1920, 1080, "album"],
  [720, 1280, "portrait"],
];

console.log(screenDimensions);

// ❌ Ошибка: "landscape" не входит в допустимые значения
// const wrong: [number, number, "album" | "portrait"] = [800, 600, "landscape"];
