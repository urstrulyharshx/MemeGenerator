const URL="https://meme-api.com/gimme";
const generateMemeBtn=document.querySelector(".generate-meme-btn");
const memeImg=document.querySelector(".meme-generator img");
const memeTitle=document.querySelector(".meme-generator .meme-title")
const memeAuthor=document.querySelector(".meme-author");


const updateDetails=(url,title,author)=>{
    memeImg.setAttribute("src",url)
    memeImg.innerHTML=title;
    memeAuthor.innerHTML=`Meme BY:${author}`;
    memeTitle.innerHTML=`Here Is Your Random Meme`;
}
// console.log(memeTitle)
// console.log(memeAuthor)
const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json())
    .then((data)=>
        {
            updateDetails(data.url,data.title,data.author)
        });
        
        
        
}
generateMemeBtn.addEventListener("click",generateMeme);

