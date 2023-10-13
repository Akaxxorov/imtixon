let text_content = document.querySelector(".text_content")

text_content.addEventListener("mouseover",() => {
    text_content.classList.add("d-none")
} )

text_content.addEventListener('mouseleave', ()=> {
    text_content.classList.remove("d-none")
})