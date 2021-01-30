const items = document.getElementById('items');
const template = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const respuesta = await fetch('api.json');
    const data = await respuesta.json();
    pintarCartas(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCartas = (data) => {
  data.forEach((producto) => {
    template.querySelector('h5').textContent = producto.title;
    template.querySelector('p').textContent = producto.precio;
    template.querySelector('img').setAttribute('src', producto.thumbnailUrl);

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};
