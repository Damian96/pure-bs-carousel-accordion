$((function(){const e=$(".carousel-item .card");e.each((function(s,a){a.addEventListener("click",(()=>{e.removeClass("expand").removeClass("unset").addClass("small"),a.classList.remove("small"),$(a).addClass("expand active")}))}));const s=document.getElementById("pureBsAccordionCarousel");new bootstrap.Carousel(s),s.addEventListener("slide.bs.carousel",(function(s){e.removeClass("active");$(s.relatedTarget).find(".card").first().removeClass("small").addClass("expand active")})),s.addEventListener("slid.bs.carousel",(function(){e.filter(".expand").not(".active").removeClass("expand").addClass("small")}))}));
//# sourceMappingURL=index.a0b91bd7.js.map
