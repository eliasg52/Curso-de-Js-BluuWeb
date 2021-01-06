/*
LEER Y MODIFICAR HTML
const titulo = document.querySelector('h3');
console.log(titulo.textContent);

console.log(document.querySelector('#parrafo'));

console.log(document.querySelector('.h3-danger'));

console.log(document.getElementById('parrafo'));

console.log(document.querySelectorAll('.h3-danger '));
 */

/* const parrafo = document.querySelector('#parrafo');
parrafo.textContent = 'texto desde JS';
parrafo.innerHTML = '<b>texto con innerHTML</b>';

parrafo.classList.add('danger', 'my2'); */

/*
CREATE ELEMENT E INNERHTML
const lista = document.querySelector('#lista');
console.log(lista);

const arrayElement = ['primer elemento', 'segundo elemento', 'tercer elemento'];

arrayElement.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  lista.appendChild(li);
}); */

/* const lista = document.querySelector('#lista');

const arrayItem = ['item 1', 'item 2', 'item 3'];

const fragment = document.createDocumentFragment(); */
/*
FRAGMENT
const fragment = new DocumentFragment();  Forma numero 2*/

/* arrayItem.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  fragment.appendChild(li);
});

lista.appendChild(fragment); */

/*
PARA INSERTAR ELEMENTOS AL REVEZ
arrayItem.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  const primerHijo = fragment.firstChild;

  fragment.insertBefore(li, primerHijo);
});

lista.appendChild(fragment); */

/*
CREANDO UN ELEMENTO COMPLEJO CON CREATEELEMENT
const fragment = document.createDocumentFragment();

arrayItem.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('list');
    
    const b = document.createElement('b');
    b.textContent = 'Nombre: ';
    const span = document.createElement('span');
    span.classList.add('text-danger');
    span.textContent = item;
    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
});

lista.appendChild(fragment); */

/*
INNERHTML CON FRAGMENT
let fragment = '';
arrayItem.forEach((item) => {
    fragment += `
    <li class='list'>
    <b>Nombre: </b> <span class='text-danger'>${item}</span>
    </li>
    `;
});

lista.innerHTML = fragment; */

const lista = document.querySelector('#lista');

const arrayItem = ['item 1', 'item 2', 'item 3'];

const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();

arrayItem.forEach((item) => {
  template.querySelector('.list span').textContent = item;
  const clone = template.cloneNode(true);
  fragment.appendChild(clone);
});

lista.appendChild(fragment);
