import axios from "axios";

interface Post {
  userId: number; // ID пользователя, которому принадлежит пост
  id: number;     // Уникальный идентификатор поста
  title: string;  // Заголовок поста
  body: string;   // Текст поста
}

// Асинхронная функция, которая получает список постов
// Она возвращает Promise с массивом объектов типа Post
const fetchPosts = async (): Promise<Post[]> => {
  // Делаем GET-запрос к API, указываем, что ждём массив Post
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Возвращаем массив постов из ответа (axios кладёт данные в .data)
  return response.data;
};

// Асинхронная функция, которая выводит в консоль первые 3 поста
async function logThreePosts() {
  // Ждём выполнения fetchPosts и сохраняем результат в переменной posts
  const posts = await fetchPosts();

  // Берём первые три поста из массива с помощью slice
  const firstThree = posts.slice(0, 3);

  // Проходим по каждому из этих трёх постов
  for (const el of firstThree) {
    // Выводим заголовок и текст поста в консоль
    // \n — это перевод строки, \n--- — разделитель
    console.log(`TITLE: ${el.title}\nBODY: ${el.body}\n---`);
  }
}


logThreePosts();
