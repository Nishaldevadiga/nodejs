console.log("client loaded");





// fetch('https://dummyjson.com/recipes/1').then((res) => {
//     res.json().then((data) => {
//         console.log(data);
//     })
// });


async function recipe() {
    const prod = await fetch('https://dummyjson.com/recipes/1');
    const data = await prod.json();
    console.log(data);
}

recipe();
