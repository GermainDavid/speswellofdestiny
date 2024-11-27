$(".headerTab").on("click", function(){
    let id = $(this).attr("name");
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
});