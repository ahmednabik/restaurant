function createMenuItem(img, heading, description, price) {
  return `<div class="card">
    <div class="dish-image"><img src="${img}" alt=""></div>
    <div class="heading">${heading}</div>
    <div class="description">${description}</div>
    <div class="price">${price}</div>
</div>`;
}

export default createMenuItem;
