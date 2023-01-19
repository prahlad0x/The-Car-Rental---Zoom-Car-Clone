const slidehome = "https://63c79ab5e52516043f40b73b.mockapi.io/cars"
let inc = document.querySelector("#inc")
let dec = document.querySelector("#dec")
let slideshowimg = [];
let img_no = 1;




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