// Задача 1: Создание списка дел
// 🧩 Условие:
// Сделай список из дел (todo) с помощью JavaScript. Все элементы создаются и
// добавляются при загрузке страницы.
// Что нужно сделать:
// 1. В HTML должен быть контейнер: <ul id="todo-list"></ul>
// 2. В JS создай 5 пунктов списка (например: "Купить хлеб", "Помыть посуду", и т.д.)
// 3. Каждый пункт — это <li> с классом todo-item
// 4. Добавь каждому li:
// ○ data-id — с уникальным номером (1, 2, 3...)
// ○ title — с текстом задания
// ○ стиль: цвет текста – серый, отступ снизу – 10px
// ○ если пункт с нечётным индексом — добавь класс important
// 5. Добавь все элементы в #todo-list
// Использовать:
// ● createElement, setAttribute, textContent, classList.add, style

const toDoList = document.querySelector("#todo-list");

const toDoListArr = [
  "Купить хлеб",
  "Помыть посуду",
  "Установить Linux",
  "Не забыть сказать что Windows полное г@%&^#*",
  "Наслаждаться результатом 🤌",
];

toDoListArr.forEach((action, i) => {
  const li = document.createElement("li");
  if (!(i % 2 === 0)) {
    li.classList = "important";
  }
  li.title = action;
  li.textContent = action;
  li.dataset.id = i;
  li.style.color = "grey";
  li.style.marginBottom = "10px";
  toDoList.append(li);
});

// --------------------------------------------------------------------------------------------------

// ✅ Задача 2: Галерея изображений
// 🧩 Условие:
// Создай галерею из 4 изображений. Все изображения создаются в JS и добавляются в
// HTML в контейнер <div id="gallery"></div>.
// Что нужно сделать:
// 1. Создай 4 изображения (img)
// 2. Установи им:
// ○ src (можно взять с любого сайта, например, https://picsum.photos)
// ○ alt — произвольный текст
// ○ класс gallery-img
// ○ ширину 200px
// ○ рамку 2px solid #ccc
// ○ отступ справа 10px
// 3. Добавь их в контейнер #gallery
// 4. После добавления, найди все .gallery-img с помощью
// querySelectorAll() и измените им стиль: закругли углы (borderRadius ='8px')

const gallery = document.querySelector("#gallery");

const imgArr = [
  { src: "https://picsum.photos/200", alt: "abc" },
  { src: "https://picsum.photos/id/237/200/300", alt: "abc" },
  { src: "https://picsum.photos/seed/picsum/200/300", alt: "abc" },
  { src: "https://picsum.photos/200/300?grayscale", alt: "abc" },
];

imgArr.forEach((img) => {
  const newImg = document.createElement("img");
  newImg.src = img.src;
  newImg.classList.add("gallery-img");
  newImg.style.border = "2px solid #ccc";
  newImg.style.width = "200px";
  newImg.style.marginRight = "10px";

  gallery.append(newImg);
});

const findGalleryImg = document.querySelectorAll(".gallery-img");
findGalleryImg.forEach((img) => {
  img.style.borderRadius = "8px";
});

// --------------------------------------------------------------------------------------------------

// ✅ Задача 3: Карточки пользователей
// 🧩 Условие:
// Создай три карточки пользователей. Используй заранее подготовленные данные
// внутри JS.
// const users = [
// { name: "Алиса", age: 25, role: "Designer" },
// { name: "Боб", age: 30, role: "Developer" },
// { name: "Чарли", age: 28, role: "Manager" },
// ];
// Что нужно сделать:
// 1. В HTML должен быть контейнер: <div id="users"></div>
// 2. Для каждого пользователя создай карточку (div с классом user-card)
// 3. Внутри карточки:
// ○ h3 с именем
// ○ p с возрастом
// ○ span с ролью
// 4. Задай карточке:
// ○ фиксированную ширину 200px,
// ○ отступ снизу 15px,
// ○ фоновый цвет: если роль "Developer", сделай фон светло-зелёным
// 5. Добавь все карточки в #users

const users = [
  { name: "Алиса", age: 25, role: "Designer" },
  { name: "Боб", age: 30, role: "Developer" },
  { name: "Чарли", age: 28, role: "Manager" },
];

const usersContainer = document.querySelector("#users");

users.forEach(({ name, age, role }) => {
  const newUser = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const span = document.createElement("span");

  h3.textContent = name;
  p.textContent = age;
  span.textContent = role;

  newUser.append(h3);
  newUser.append(p);
  newUser.append(span);

  newUser.style.width = "200px";
  newUser.style.marginBottom = "15px";

  if (role === "Developer") {
    newUser.style.backgroundColor = "green";
  }

  usersContainer.append(newUser);
});
