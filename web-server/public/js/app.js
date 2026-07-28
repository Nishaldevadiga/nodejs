async function recipe(id) {
    try{
    const prod = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await prod.json();

    console.log(data);
    }catch(err){
        console.log("error occured");
    }
}

const form=document.querySelector('form');
const searchEle=document.querySelector('input');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    recipe(searchEle.value);
})



