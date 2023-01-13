let grid = document.querySelector(".grid");
let input = document.querySelector(".me-2");

axios.defaults.baseURL = "https://fakestoreapi.com";

async function getProducts() {
  let res = await axios.get("/products");

  let arr = res.data;

  arr.forEach((products) => {
    let box = document.createElement("div");
    box.classList.add("box");
    grid.appendChild(box);
    let h3 = document.createElement("h3");
    h3.textContent = `${products.title}`;
    box.appendChild(h3);
    let img = document.createElement("img");
    img.setAttribute("src", products.image);
    box.appendChild(img);
    let div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("narxi");
    box.appendChild(div);
    let h4 = document.createElement("h4");
    h4.textContent = `$${products.price}`;
    div.appendChild(h4);
    let h5 = document.createElement("h4");
    h5.textContent = `${products.rating.rate} / ${products.rating.count}`;
    div.appendChild(h5);
    let i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-cart-shopping");
    div.appendChild(i);
  });
  input.addEventListener("input", (e) => {
    let text = e.target.value.toLowerCase();
  });
}

getProducts();