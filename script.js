const accessKey="IyIJP1fBGlGQRfaTlTStAlUTqKOr3ri7RlIa6tK3-p8";
const formtext=document.getElementById("form-text");
const searchtext=document.getElementById("search-text");
const imagesec=document.getElementById("image-sec");
const searchbtn=document.getElementById("search-btn");

var keyword="";
var page=1;

async function search(){
    keyword=searchtext.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
    const response =await fetch(url);
    const data = await response.json();

    if(page===1){
       imagesec.innerHTML=""; 
    }

  const results=data.results;
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imagelink=document.createElement("a");
    imagelink.href= result.links.html;
    imagelink.target='_blank';

    imagelink.appendChild(image);
    imagesec.appendChild(imagelink);
  })
    searchbtn.style.display="block";
}

formtext.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    search()
})

searchbtn.addEventListener("click",()=>{
      page++;
      search();
})
