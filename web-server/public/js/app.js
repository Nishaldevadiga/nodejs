async function recipe() {
    try{
    const prod = await fetch('https://dummyjson.com/recipes/1');
    const data = await prod.json();

    console.log(data);
    }catch(err){
        console.log("error occured");
    }
}

const form=document.querySelector('form');

