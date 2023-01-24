var products = [
  {
    id: 1,
    name: "product1",
    price: 55,

    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    qte: 1,
  },
  {
    id: 2,
    name: "product2",
    price: 40,

    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png",
    qte: 1,
  },
];
var myCart = [];
var root = document.getElementById("root");
var productList = document.getElementById("products");
var svg2 = document.createElement("i");
var title = document.getElementById("title");
svg2.classList.add("fa-solid", "fa-arrow-rotate-right", "ml-8");
title.appendChild(svg2);

products.forEach((element) => {
  var liProducts = document.createElement("div");
  liProducts.classList.add("hidden");
  var div = document.createElement("div");
  div.classList.add(
    "block",
    "rounded-lg",
    "p-4",
    "m-4",
    "shadow-lg",
    "shadow-indigo-100"
  );
  var name = document.createElement("h1");
  var img = document.createElement("img");
  img.classList.add(["h-56", "w-full", "rounded-md", "object-cover"]);
  div.appendChild(name);
  img.setAttribute("src", element.img);
  div.appendChild(img);
  var price = document.createElement("p");

  price.innerHTML = "Price = " + element.price;
  price.classList.add(["text-sm", "text-gray-500"]);
  div.appendChild(price);

  var qte = document.createElement("input");
  qte.classList.add(["text-sm", "text-gray-500", "m-5"]);
  qte.setAttribute("type", "number");
  qte.setAttribute("min", "1");
  qte.setAttribute("value", 1);
  div.appendChild(qte);
  var totalPrice = document.createElement("span");
  totalPrice.classList.add(["text-sm", "text-gray-500", "m-5"]);
  qte.addEventListener("change", (e) => {
    element.qte = e.target.value;
    totalPrice.innerHTML = element.qte * element.price + "$";
  });
  div.appendChild(totalPrice);

  var svg1 = document.createElement("i");
  svg1.classList.add("fa-solid");
  svg1.classList.add("fa-delete-left");
  svg1.classList.add("ml-8");

  div.appendChild(svg1);

  var heart = document.createElement("i");
  heart.classList.add(["fa-regular"]);

  heart.classList.add(["mx-5"]);
  heart.classList.add(["fa-heart"]);
  div.appendChild(heart);

  heart.addEventListener("click", function () {
    heart.classList.toggle(["fa-solid"]);
  });

  svg1.addEventListener("click", function () {
    div.classList.toggle("hidden");
    productList.appendChild(div);
    element.qte = qte.value = 1;
    totalPrice.classList.add("hidden");
    div.classList.remove("hidden");
  });

  root.appendChild(div);
  svg2.addEventListener("click", function (ev) {
    root.appendChild(div);
  });
});

// buttons
// set the modal menu element
const $targetEl = document.getElementById("modalEl");
