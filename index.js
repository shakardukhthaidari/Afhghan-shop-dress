let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

console.log(card);
let blog = document.querySelector(".trends");
let contentPage = document.querySelector(".content");



contentPage.style.display ="none";
    card.style.display ="none";
    card2.style.display="none";
    blog.style.display ="none";
    about.style.display="none";
  contentPage.style.display = "block";


function homes(){
    contentPage.style.display ="block";
    card.style.display ="block";
    card2.style.display="block";
    blog.style.display ="block";
    about.style.display="none";

  document.getElementById("Blog").style.color="black";
  document.getElementById("homes").style.color="white";
  document.getElementById("shops").style.color="black";
  document.getElementById("Contact").style.color="black";
  document.getElementById("about").style.color="black";    
}
function shops(){
    contentPage.style.display="none";
    blog.style.display ="none";
    card.style.display ="block";
    card2.style.display="block";
    about.style.display="none";
    contact.style.display="none";
    
     //card.style.display ="none";

     document.getElementById("Blog").style.color="black";
   document.getElementById("homes").style.color="black";
    document.getElementById("shops").style.color="white";
  document.getElementById("Contact").style.color="black";
  document.getElementById("about").style.color="black";    
}
function Blogs(){
   contentPage.style.display ="none";
    card.style.display ="none";
    card2.style.display="none";
    about.style.display="none";
    blog.style.display ="block";

    document.getElementById("Blog").style.color="white";
    document.getElementById("homes").style.color="black";
    document.getElementById("shops").style.color="black";
    document.getElementById("Contact").style.color="black";
    document.getElementById("about").style.color="black";    
}
function abouts(){
    contentPage.style.display ="none";
    card.style.display ="none";
    card2.style.display="none";
    blog.style.display ="none";
    about.style.display="block";

   document.getElementById("Blog").style.color="black";
   document.getElementById("homes").style.color="black";
   document.getElementById("shops").style.color="black";
   document.getElementById("Contact").style.color="black";
   document.getElementById("about").style.color="white";    
}console.log(card);

function show(img){
  let newImg = document.getElementById("newImg");
  console.log(img);
  newImg.src=img.src;

  contentPage.style.display ="none";
  card.style.display ="none";
  card2.style.display="none";
  blog.style.display ="none";
  about.style.display="none";
  contact.style.display="none";


  document.querySelector(".cart").style.display="flex";
}


function Contacts() {
  contentPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";
  contact.style.display = "block";

  document.getElementById("homes").style.color = "black";
  document.getElementById("shops").style.color = "black";
  document.getElementById("Blog").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("Contact").style.color = "white";
}


function addCart(){
  alert("Added to Cart");
  location.reload();
}