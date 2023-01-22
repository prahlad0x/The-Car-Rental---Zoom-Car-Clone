const slidehome = "https://63c79ab5e52516043f40b73b.mockapi.io/cars"
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let slideshowimg = [];
let img_no = 1;

let userdata = JSON.parse(localStorage.getItem("user"))||[];
let no = localStorage.getItem("no")
// console.log(no)
let user = document.getElementById("name")
user.innerText = "User"
for(i=0; i<userdata.length; i++){
    if(no == userdata[i].no){
    user.innerText = userdata[i].name
    // console.log(user.innerText)
    localStorage.setItem("name", userdata[i].name)
        break;
    }
    else if(no == userdata[i].no){
    user.innerText = userdata[i].name
    // console.log(user.innerText)
    localStorage.setItem("name", userdata[i].name)
        break;
    }
}


async function fetchcars(url){
    try {
        let request = await fetch(url)
        let data = await request.json()
        slideshowimg = data;
        displayslide(slideshowimg)
    } catch (error) {
        console.log(error)
    }
}
setInterval(() => {
    if(img_no >= slideshowimg.length){
        img_no=0;
    }
    img_no++;
    displayslide(slideshowimg)
}, 3000);
inc.addEventListener("click", ()=>{
    if(img_no >= slideshowimg.length){
        img_no=0
    }
    else{
        img_no++;
    }
    
    displayslide(slideshowimg)
})
dec.addEventListener("click", ()=>{
    if(img_no > 0){
        img_no--;
        
    }
    else{
        img_no = slideshowimg.length -1
    }
    
    
    displayslide(slideshowimg)
})

function displayslide(data){
    let head = document.querySelector("#slider > h2")
    head.innerText = "₹ " + data[img_no].rent+" Per Hour"

    let headname = document.querySelector("#slider > h1")
    headname.innerText = data[img_no].name;

    let car  = document.querySelector("#slider > img")
    car.setAttribute("src", data[img_no].background)

}
fetchcars(slidehome)