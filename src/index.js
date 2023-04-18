const input = document.getElementById('newPair');
const listPair = document.querySelector('.list');
const btnAddPair = document.getElementById('addPair');
const btnDelete = document.getElementById('delete');
const btnSortByValue = document.getElementById('value');
const btnSortByName = document.getElementById('name');
const showFile = document.getElementById('show');

btnAddPair.addEventListener('click', addToList);
btnSortByName.addEventListener('click', sortByName);
btnSortByValue.addEventListener('click', sortByValue);
btnDelete.addEventListener('click', deleteList);
showFile.addEventListener('click', showXML);

const list = [];

function addToList(e) {
  e.preventDefault();
  const text = input.value;

  if (/^([a-zA-Z0-9]+=[a-zA-Z0-9]+)$/.test(text)) {
    list.push(text);
    const markup = list.map(item => `<li>${item}</li>`).join('');
    listPair.innerHTML = markup;
    console.log(list);
    input.value = '';
  } else window.alert('Bad value');
}

function sortByName() {
  listPair.innerHTML = '';
  const markup = list
    .sort()
    .map(item => `<li>${item}</li>`)
    .join('');
  listPair.innerHTML = markup;
  console.log('Sort by Name');
}

function sortByValue() {
  const sortedList = list.sort(function (a, b) {
    const valueA = a.split('=')[1];
    const valueB = b.split('=')[1];
    return valueA.localeCompare(valueB);
  });
  listPair.innerHTML = '';
  const markup = sortedList.map(item => `<li>${item}</li>`).join('');
  listPair.innerHTML = markup;
  console.log('Sort by Value');
}

function deleteList() {
  list.length = 0;
  listPair.innerHTML = '';
  console.log(list);
}

function showXML() {
  const xml = document.implementation.createDocument('', '', null);
  const root = xml.createElement('root');
  xml.appendChild(root);

  for (let i = 0; i < list.length; i++) {
    const element = xml.createElement('list');
    element.setAttribute('value', list[i]);
    root.appendChild(element);
  }

  const parsedXML = xml.documentElement.outerHTML;
  console.log(parsedXML);
  const myWindow = window.open();
  myWindow.document.write(
    '<textarea rows="20" cols="40" style="border:none;">' +
      '<?xml version="1.0" encoding="ISO-8859-1"?>' +
      parsedXML +
      '</textarea>'
  );
}
