const cartItemList = document.querySelector('.cart__items');
const container = document.querySelector('.container');

function addLoading() {
  const loading = document.createElement('div');
  loading.innerText = 'carregando...';
  loading.className = 'loading';
  container.appendChild(loading);
}

function removeLoading() {
  const loading = document.querySelector('.loading');
  container.removeChild(loading);
}

function totalPrice(savedCart) {
  let total = 0;
  savedCart.forEach((element) => {
    total += element.salePrice;
  });
  const totalDom = document.querySelector('.total-price');
  totalDom.innerText = total;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  
  return li;
}

function funcCreateItem(createItem, sku) {
  const addItems = createCartItemElement(createItem);
  addItems.addEventListener('click', (event) => {
    cartItemList.removeChild(event.target);
    let savedCart2 = getSavedCartItems();
    savedCart2 = savedCart2.filter((cartItem) => cartItem.sku !== sku);
    saveCartItems(savedCart2);
    totalPrice(savedCart2);
  });
  cartItemList.appendChild(addItems);
}

async function cartItemClickListener(sku) {
  const item = await fetchItem(sku);
  const createItem = { 
    sku: item.id,
    name: item.title,
    salePrice: item.price,
  };
  const savedCart = getSavedCartItems();
  savedCart.push(createItem);
  saveCartItems(savedCart);
  totalPrice(savedCart);
  funcCreateItem(createItem, sku);
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
 
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const buttunAddCard = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttunAddCard.addEventListener('click', () => {
    cartItemClickListener(sku);
  });
  section.appendChild(buttunAddCard);

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const creatingAndAddingLi = (result) => {
  const listOl = document.querySelector('.items');
  const createLi = document.createElement('li');
  createLi.append(result);
  listOl.appendChild(createLi);
};

const renderCart = () => {
  const cartList = getSavedCartItems();
  cartList.forEach((cartItem) => {
    const addItems = createCartItemElement(cartItem);
    addItems.addEventListener('click', (event) => {
      cartItemList.removeChild(event.target);
      let savedCart = getSavedCartItems();
      savedCart = savedCart.filter((item) => item.sku !== cartItem.sku);
      saveCartItems(savedCart);
      totalPrice(savedCart);
    });
    cartItemList.appendChild(addItems);
  });
  totalPrice(cartList);
};

document.querySelector('.empty-cart').addEventListener('click', () => {
  cartItemList.innerHTML = '';
  saveCartItems([]);
  totalPrice([]);
});

window.onload = async () => {
  addLoading();
  const response = await fetchProducts('computador');
  removeLoading();
  response.results.forEach((result) => {
    const createProduct = createProductItemElement({
      sku: result.id,
      name: result.title,
      image: result.thumbnail,
    });
    creatingAndAddingLi(createProduct);
  });

  renderCart();
};

 if (typeof module !== 'undefined') {
  module.exports = {
    createProductItemElement,
    createCartItemElement,
  };
}
