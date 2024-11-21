document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");
    
    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
