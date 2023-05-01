const questions = document.querySelectorAll(".question");

questions.forEach((qus)=>{
    const btn = qus.querySelector(".question-btn");
    btn.addEventListener("click",()=>{
        qus.classList.toggle("show-text")
    })
})