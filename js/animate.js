function animate(){let e=document.querySelector("#cards");e.classList.remove("card-transition");let r=new IntersectionObserver(r=>{r.forEach(r=>{if(r.isIntersecting){e.classList.add("card-transition");return}e.classList.remove("card-transition")})});r.observe(document.querySelector("#cards"))}