// toggle bar start

let navbar_items = document.querySelector("#navbar_items ul");
let toggle_bars = document.querySelector("#toggle_bars");
let xicon = document.querySelector("#xicon i");

toggle_bars.addEventListener("click", () => {
  navbar_items.style.right = "0px";
  navbar_items.style.boxShadow = "0px 40px 60px gray";
  xicon.style.transform = "rotate(360deg)";
});
xicon.addEventListener("click", () => {
  navbar_items.style.right = "-300px";
  xicon.style.transform = "rotate(-360deg)";
  navbar_items.style.boxShadow = "0px 0px 0px gray";
});

// foggle bar end
// Feature_Products start
function Feature_Products() {
  let imgs = [
    "imgs/products/f1.jpg",
    "imgs/products/f2.jpg",
    "imgs/products/f3.jpg",
    "imgs/products/f4.jpg",
    "imgs/products/f5.jpg",
    "imgs/products/f6.jpg",
    "imgs/products/f7.jpg",
    "imgs/products/f8.jpg",
  ];
  let pro_container = document.querySelector("#pro_container");
  let html = "";
  imgs.forEach((el) => {
    let random = Math.floor(Math.random() * (70 - 50 + 1) + 50);
    html += `<div class="pro" onclick="window.location.href='sProduct.html'">
      <img src="${el}" alt="no-referrer" />
      <div class="des">
        <p>adidas</p>
        <h5>Cortoon Astronaut T-Shirt</h5>
        <div class="pro_Star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <div class="tk_shop">
        <h4>$${random}</h4>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </div>`;
  });
  if (pro_container) {
    pro_container.innerHTML = html;
  }
}
Feature_Products();
// Feature_Products end

// new arrivals start
function new_arrivals() {
  let imgs = [
    "imgs/products/n1.jpg",
    "imgs/products/n2.jpg",
    "imgs/products/n3.jpg",
    "imgs/products/n4.jpg",
    "imgs/products/n5.jpg",
    "imgs/products/n6.jpg",
    "imgs/products/n7.jpg",
    "imgs/products/n8.jpg",
  ];
  let pro_container = document.querySelector("#new_arrivals");
  let html = "";
  imgs.forEach((el) => {
    let random = Math.floor(Math.random() * (70 - 50 + 1) + 50);
    html += `<div class="pro">
      <img src="${el}" alt="no-referrer" />
      <div class="des">
        <p>adidas</p>
        <h5>Cortoon Astronaut T-Shirt</h5>
        <div class="pro_Star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
      <div class="tk_shop">
        <h4>$${random}</h4>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </div>`;
  });
  if (pro_container) {
    pro_container.innerHTML = html;
  }
}
new_arrivals();
// new arrivals end

// tabel start
let t_body = document.querySelector("#t-body");
if (t_body) {
  console.log(t_body);
}
// tabel end
