const slidehome = "https://63c79ab5e52516043f40b73b.mockapi.io/cars"
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let slideshowimg = [];


async function fetchcars(url){
    try {
        let request = await fetch(url)
        let data = await request.json()
        slideshowimg = data;
        setTimeout(() => {
            displayslide(slideshowimg);
        }, 3000);
    } catch (error) {
        console.log(error)
    }
}

function displayslide(data){
 let   i=1;
 let boxx = document.querySelector(".slider")
 let rate = document.createElement("h2")
 rate.innerText= "₹" + data[i].rent +"Per Hour";

let id = document.createElement("h1")
id.innerText = data[i].name

let image = document.createElement("img")
image.setAttribute("src", data[i].background);
boxx.append(rate, id, image)
inc.addEventListener("click",()=>{
    console.log(data[i])

    if(i<data.length){
        i++;
        displayslide(slideshowimg)
    }
    else{
        i=0;
    }
})
dec.addEventListener("click",()=>{ 
    if(i>0){
        i--;
        displayslide(slideshowimg);
    }
})

// setInterval(() => {
//     console.log(data[i])
//     rate.innerText = "₹" + data[i].rent +"Per Hour";
//     id.innerText = data[i].name;
//     image.setAttribute("src", data[i].background);
//     if(i>=data.length){
//         i=0;
//     }
//     else{
//         i++;
//     }
// }, 3000);

}

fetchcars(slidehome)