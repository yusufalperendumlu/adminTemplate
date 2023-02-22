// const listSec = document.getElementById("templi");

// listSec.addEventListener('mouseenter', (e) => {
//     e.preventDefault();
    
    
//     const ass = document.getElementById("ass");

//     ass.classList.add("active");
// })

// listSec.addEventListener('mouseleave', (e) => {
//     e.preventDefault();
    
//     const ass = document.getElementById("ass");

//     ass.classList.remove("active");
// })

$("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         
    $(this).val().replace(/.*(\/|\\)/, '') );
});