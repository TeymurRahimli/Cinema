let owlCarousel=document.querySelectorAll('.owl-carousel')
fetch('https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=all')
.then(res=>res.json())
.then(data=>{
    console.log(data.results);
    data.results.forEach((e,i) => {
        if(i>=0 && i<=7){
         owlCarousel[0].innerHTML+=`
        <div class="item">
        <img src=${'https://image.tmdb.org/t/p/w500'+e.backdrop_path} alt="">
        <h3>${e.original_title}</h3>
      </div>`
        }else if(i>=8 && i<=14){
            owlCarousel[1].innerHTML+=`
            <div class="item">
            <img src=${'https://image.tmdb.org/t/p/w500'+e.backdrop_path} alt="">
            <h3>${e.original_title}</h3>
          </div>` 
        }else if(i>=15 && i<=20){
            owlCarousel[2].innerHTML+=`
            <div class="item">
            <img src=${'https://image.tmdb.org/t/p/w500'+e.backdrop_path} alt="">
            <h3>${e.original_title}</h3>
          </div>`
        }
        
        
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
})





