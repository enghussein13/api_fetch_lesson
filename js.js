  const  get= async() =>{
     const response = await fetch("https://www.breakingbadapi.com/api/characters");
     const data = await response.json()
     
    console.log(data);
     var bb=document.querySelector("#select");
     data.map(actor=>{
        bb.innerHTML+= `<option>${actor.name}</option>`
     })
    }
   const filter=async() =>{
       let api="https://www.breakingbadapi.com/api/characters?name=";
       let value=document.querySelector('#select').value

       const res=await fetch(api+value)
       const output=await res.json();
       document.querySelector("#name").innerHTML= output[0].name
       document.querySelector("#birth").innerHTML= output[0].birthday
       document.querySelector("img").src= output[0].img

   } 
   


