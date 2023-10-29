let twoItems = document.querySelector(".twoItemsBtn");
let itemsConainer = document.querySelector(".allItemsSection");
let oneItem = document.querySelectorAll(".productCard");

twoItems.addEventListener("click", showTwoItemsFunc);

function showTwoItemsFunc() {
  itemsConainer.className = "twoItems";

  for (const item of oneItem) {
    item.className = "oneItem";
  }
}

let fourItems = document.querySelector(".sixItemsBtn");

fourItems.addEventListener("click", showSixItemsFunc);

function showSixItemsFunc() {
  itemsConainer.className = "fourItems";

  for (const item of oneItem) {
    item.className = "oneItem";
  }
}

let productSection = document.querySelector(".products");
let popupwindow = document.querySelector(".popupDiv");
let wrapper = document.querySelector(".wrapper");

productSection.addEventListener("transitionend", function (e) {
  popupwindow.className = "popupDivafter";
});

let closepopup = document.querySelector(".closepopup");

closepopup.addEventListener("click", closepopupFunc);

function closepopupFunc() {
  popupwindow.remove();
}


let allItemsSection = document.querySelector(".allItemsSection");

function createProductCard(product) {
  let divCard = document.createElement("div");
  divCard.className = "productCard";

  let divCardImg = document.createElement("div");
  divCardImg.className = "divCardImg";
  divCardImg.innerHTML = `<img src=${product.img} alt="item img">`;
  divCard.append(divCardImg);

  let divCardName = document.createElement("h3");
  divCardName.textContent = product.name;
  divCardName.className = "divCardName";
  divCard.append(divCardName);

  let divCardPrice = document.createElement("p");
  divCardPrice.textContent = `${product.price}$`;
  divCardPrice.className = "divCardPrice";
  divCard.append(divCardPrice);

  let divCardButton = document.createElement("button");
  divCardButton.textContent = "to cart";
  divCardButton.className = "divCardButton";
  divCard.append(divCardButton);

  divCard.setAttribute("id", product.id);

  return divCard;
}

products.forEach((product) => {
  let productCard = createProductCard(product);
  allItemsSection.append(productCard);
});


allItemsSection.addEventListener("click", showDescriptionCard);

function showDescriptionCard(e) {
  if (e.target.className != "productCard") {
    return;
  } else {
    let idInhtml = e.target.getAttribute("id");

    products.forEach((product) => {
      if (idInhtml == product.id) {
        let divDescriptionCard = document.createElement("div");
        divDescriptionCard.className = "divDescriptionCard";
        divDescriptionCard.textContent = product.description;

        let closeSign = document.createElement("p");
        closeSign.textContent = "X";
        closeSign.className = "closeSign";
        divDescriptionCard.append(closeSign);
        closeSign.addEventListener("click", closeDescriptionFunct);

        function closeDescriptionFunct() {
          divDescriptionCard.remove();
        }

        allItemsSection.append(divDescriptionCard);
      }
    });
  }
}


let cartArr = [];

let tocartBtn = document.querySelectorAll(".divCardButton");
for (const cartbtn of tocartBtn) {
  cartbtn.addEventListener("click", addToArrayCart);

  function addToArrayCart() {
    let productObjId = cartbtn.parentElement.id;

    products.forEach((product) => {
      if (productObjId == product.id) {
        let newObj = {
          id: product.id,
          img: product.img,
          name: product.name,
          price: product.price,
          count: ++product.count,
          description: product.description,
        };

        cartArr.push(newObj);

        console.log(cartArr);

        cartArr.forEach((obj) => {
            let objInCart = createProdCardsInCart(obj);
            popupCartProducts.append(objInCart);
          });
      }
    });
  }
}


let popupCartProducts = document.querySelector(".popupCartProducts");

let cartBtn = document.querySelector(".cartBtn");
cartBtn.addEventListener("click", createProdCardsInCart);

function createProdCardsInCart(obj) {
  popupCartProducts.style.display = "block";

  let div = document.createElement("div");
  let p = document.createElement("p");
  div.append(p);
  p.textContent = obj.name;
  popupCartProducts.append(div);

  return div;
}

let videoSection = document.querySelector(".videotextcontainer");
let videoTitle = document.querySelector(".videotitle");
videoTitle.addEventListener("click", showEcoPolicy);
function showEcoPolicy() {
  videoTitle.style.display = "none";

  let ecoPolicyDiv = document.createElement("div");
  let ecoPolicyP = document.createElement("p");
  ecoPolicyP.textContent =
    "We evaluate our environmental impacts at every stage from raw material procurement to use and disposal of our products, and ensure the reduction of negative environmental impacts within the framework of technical and economic possibilities.We comply with national and international legal regulations and other obligations that we are subject to.We ensure the reduction of consumption of natural resources and increase of energy efficiency, minimising the waste and supporting the recycling via continuous monitoring and our developed applications. We ensure that the sense of environmental responsibility of all our employees from top management to the lowest unit are increased by provide environmental trainings to all our employees.We act together with all our operational stakeholders to improve environmental awareness and to contribute to our environmental goals.We carry out continuous improvement through periodic reviews to ensure the continuity of the environmental management system.";
  ecoPolicyDiv.append(ecoPolicyP);
  videoSection.append(ecoPolicyDiv);
  ecoPolicyDiv.classList.add("videotitle");
  ecoPolicyDiv.classList.add("ecovideoText");
}
