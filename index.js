let shareBtn = document.querySelector (".share-btn")
let socialIcons = document.querySelector (".social-icons")

socialIcons.style.display = "none"

shareBtn.addEventListener ("click", () => {
    socialIcons.style.display = "flex"

    setTimeout(() => {
        socialIcons.style.display = "none"
    }, 2000);
})