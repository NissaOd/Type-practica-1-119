// Интерфейс универсального контейнера (дженерик T — это тип элементов)
interface Container<T> {
  items: T[];                 // массив элементов типа T
  addItem(item: T): void;     // метод для добавления элемента
  getItem(index: number): T;  // метод для получения элемента по индексу
}

// Контейнер для чисел
const numberContainer: Container<number> = {
  items: [],

  // добавляет число в массив
  addItem(item) {
    this.items.push(item);
  },

  // возвращает число по индексу
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(10); // добавляем число 10
console.log(numberContainer.getItem(0)); // выведет: 10


// Контейнер для строк
const stringContainer: Container<string> = {
  items: [],

  // добавляет строку в массив
  addItem(item) {
    this.items.push(item);
  },

  // возвращает строку по индексу
  getItem(index) {
    return this.items[index];
  },
};

stringContainer.addItem("Hello"); // добавляем строку "Hello"
stringContainer.addItem("World"); // добавляем строку "World"
console.log(stringContainer.getItem(0)); // выведет: "Hello"
console.log(stringContainer.getItem(1)); // выведет: "World"


// Универсальная функция для получения последнего элемента массива
function getLastElement<T>(container: Container<T>): T | undefined {
  // если массив пустой → вернётся undefined
  return container.items[container.items.length - 1];
}

// Проверка работы функции
console.log(getLastElement(numberContainer)); // выведет: 10
console.log(getLastElement(stringContainer)); // выведет: "World"
