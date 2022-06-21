let kanapData = []
const items = document.getElementById('items')

const fetchKanap = async () => {
    await fetch('http://localhost:3000/api/products/')
    .then((res) => res.json())
    .then((promise) = kanapData)

   for (let i = 0; i < kanapData.length; i++) {
    const kanap = kanapData[i];
   };
   const kanapDisplay = async () => {
    kanapData.forEach(kanap  => {
        items.innerHTML = `<div id="items">${kanapData._id}</div>
                           <h3 class="items__name">${kanapData.name}</h3>
                           <img src='${kanapData.imageUrl}'/>
                           <p class="items__description">${kanapData.description}</p>
                           <p class="items__price">${kanapData.price}</p>`
    });
}
}



