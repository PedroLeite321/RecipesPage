//Auto executing function / função auto-executável   

//This'll be the main slide of my webpage / Esse seria o primeiro slide da página.
// const checkNextPrevClick = () =>    {
//     let prev = document.getElementById("clickButtonPrev").addEventListener('click', nextSlide(-1));
//     let next = document.getElementById("clickButtonNext").addEventListener('click', nextSlide(1));
// }
const pageSlideshow_Show = (slide) => {
    let i;
    let pageSlides = document.getElementsByClassName("page-slideShow");
    let pageDots = document.getElementsByClassName("dot");
    if (slide > pageSlides.length) {
        currentSlide = 1;
    } 
    if (currentSlide < 1) {
        currentSlide = pageSlides.length;
       
    }
    
    for( i = 0; i < pageSlides.length; i++  )   {
        pageSlides[i].style.display = "none";
    }
    for( i = 0; i < pageDots.length; i++ )  {
        pageDots[i].className = pageDots[i].className.replace("active", "");
    }
    pageSlides[currentSlide- 1].style.display = "flex"; //set the first image display as flex, so enabling its view
    pageDots[currentSlide-1].className += "active"; //re-enable the active class in the dots
}

const nowSlide = (slide) =>    {
    pageSlideshow_Show(currentSlide = slide);
}

const nextSlide = (slide) => {
    pageSlideshow_Show(currentSlide += slide);
}

let currentSlide = 1;
pageSlideshow_Show(currentSlide);    

 
