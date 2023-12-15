let cartBlock = document.querySelector(".cart_block");

// let block = document.querySelector(".block");
// let block_Img = document.querySelector(".block_img");
let base = JSON.parse(localStorage.getItem("name"));

let item = base.map((i) => {
  let block = document.createElement("div");
  block.className = "block";
  let block1 = document.createElement("div");
  block1.className = "block1";

  block1.innerHTML = ` 
  <div class="block_img">
  <img src="${i.img}" />
  <p>${i.category}</p>
  </div>
  <div class="block_price">
  <p>${i.price}</p>
  <div class="block_btn">
  <button class="minus">-</button>
  <input type="text" placeholder="0" />
  <button class="pluse">+</button>
  </div>
  </div>
  <div class="block_end">
  <p>120$</p>

  `;
  // let blockBtn = document.createElement("div");
  // blockBtn.className(".block_btn");

  // blockBtn.innerHTML = `
  //     <div class="block_btn">
  // `;
  let button = document.createElement("button");
  button.innerHTML = "x";

  button.addEventListener("click", () => {
    if ((block.style.display = "block")) {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });

  block.append(block1);
  cartBlock.append(block);
  block1.append(button);
  // blockBtn.append();
});
