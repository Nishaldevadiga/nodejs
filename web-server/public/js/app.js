async function recipe(id) {
    try {
        const prod = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await prod.json();

        return data;
    } catch (err) {
        console.log("error occured");
    }
}

const form = document.querySelector('form');
const searchEle = document.querySelector('input');
let messageOne = document.querySelector('#msg1');
messageOne.textContent = 'Loading the puzzle';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const rec = recipe(searchEle.value);
    rec.then(m => messageOne.textContent = m.name);
})



