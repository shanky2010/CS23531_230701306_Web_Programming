document.addEventListener("DOMContentLoaded",function(){
    const paragraph = document.getElementById("textPara");
    const button = document.getElementById("highlightBtn");
    button.addEventListener("click",function() {
        paragraph.classList.toggle("highlight");
    });
});