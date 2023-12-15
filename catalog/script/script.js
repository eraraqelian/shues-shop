let carts = JSON.parse(localStorage.getItem("name")) || [];
let cartCount = document.querySelector(".cartCount");
cartCount.innerHTML = carts.length;
let product = [
  {
    img: "./image/jordan_2.png",
    name: "retro jordan 6",
    price: "200$",
    category: "Nike",
    id: 1,
  },
  {
    img: "./image/jordan_1.png",
    name: "retro jordan 1",
    price: "200$",
    category: "Nike",
    id: 2,
  },
  {
    img: "./image/jordan_3.png",
    name: "retro jordan 4",
    price: "200$",
    category: "Nike",
    id: 3,
  },
  {
    img: "./image/jordan_8.png",
    name: "retro jordan 8",
    price: "200$",
    category: "Nike",
    id: 4,
  },
  {
    img: "./image/yezzy_1.png",
    name: "Yezzy 350 v2",
    price: "220$",
    category: "Adidas",
    id: 5,
  },
  {
    img: "./image/yezzy_2.png",
    name: "Yezzy 700 v3",
    price: "250$",
    category: "Adidas",
    id: 6,
  },
  {
    img: "./image/forum_1.png",
    name: "Forum low",
    price: "180$",
    category: "Adidas",
    id: 7,
  },
  {
    img: "./image/forum_2.png",
    name: "Forum Mid",
    price: "280$",
    category: "Adidas",
    id: 8,
  },
];

let productes = document.querySelector(".product");
product.map((p) => {
  const firstProduct = document.createElement("div");
  firstProduct.className = "first_product";

  firstProduct.innerHTML = `
    <div class="product_img">
      <img src="${p.img}" alt="" />
    </div>
    <div class="product_text">
      <div class="txt1">
        <p>${p.name}</p>
        <p>${p.category} 6</p>
      </div>
      <div class="txt2">
        <p>${p.price}</p>
      </div>
    </div>
  `;
  productes.append(firstProduct);

  let productButton = document.createElement("div");
  productButton.className = "product_button";
  productButton.innerHTML = `    
      <img src="./image/Heart_icon_red_hollow.svg.png" alt="" />
    `;
  firstProduct.append(productButton);

  let button = document.createElement("button");
  button.innerHTML = "add to cart";

  productButton.prepend(button);

  button.addEventListener("click", () => {
    carts.push(p);
    console.log(carts);
    if (!carts["name"]) {
      carts["name"] = true;
      localStorage.setItem("name", JSON.stringify(carts));
    } else {
      alert("this element already exists");
    }
    cartCount.innerHTML = carts.length;
  });
});
