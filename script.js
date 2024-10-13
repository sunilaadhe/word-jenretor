


let input = document.querySelector("input");

let word = async ()=>{
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    let data =  await response.json();
    console.log(data)
}


input.addEventListener("click",(e)=>{
    word() 
})

