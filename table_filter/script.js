const data = [
  {
    id: 1,
    name: "oussama",
    favColor: "RED",
    age: 21,
  },
  {
    id: 2,
    name: "soufiane",
    favColor: "BLACK",
    age: 30,
  },
  {
    id: 3,
    name: "mehdi",
    favColor: "GREEN",
    age: 50,
  },
  {
    id: 4,
    name: "amine",
    favColor: "YELLOW",
    age: 60,
  },
  {
    id: 5,
    name: "imane",
    favColor: "BLACK",
    age: 80,
  },
  {
    id: 6,
    name: "oumaima",
    favColor: "PINK",
    age: 10,
  },
];
let tableSearch = document.getElementById("table-search");
let tableBody = document.getElementById("tableBody");
let sortName = document.getElementById("sortName");

tableBody.innerHTML = data
  .map((e) => {
    return `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${e.name}
    </th>
    <td class="px-6 py-4">${e.favColor}</td>
    <td class="px-6 py-4">${e.age}</td>
  </tr>`;
  })
  .join("");

tableSearch.addEventListener("keydown", (ev) => {
  let newTableFilter = data.filter((e) => {
    return e.name.includes(ev.target.value);
  });

  tableBody.innerHTML = newTableFilter
    .map((e) => {
      return `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        ${e.name}
      </th>
      <td class="px-6 py-4">${e.favColor}</td>
      <td class="px-6 py-4">${e.age}</td>
    </tr>`;
    })
    .join("");
});

sortName.addEventListener("click", () => {
  let newTableSort = data
    .map((e) => {
      return `
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${e.name}
    </th>
    <td class="px-6 py-4">${e.favColor}</td>
    <td class="px-6 py-4">${e.age}</td>
  </tr>`;
    })
    .sort()
    .join("");

  tableBody.innerHTML = newTableSort;
});
