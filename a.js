document.addEventListener("DOMContentLoaded", function() {
    const targetRow = document.querySelector("tr.bg-success")
  
    if (targetRow) {
        const newDiv = document.createElement("div")
        newDiv.classList.add("frame")
        newDiv.style.borderRadius = "40px"
        newDiv.style.width = "500px"
        newDiv.style.height = "700px"
        newDiv.style.overflow = "hidden"

        const iframe = document.createElement("iframe")
        iframe.width = "500"
        iframe.height = "700"
        iframe.frameBorder = "0"
        iframe.src = "https://idk.li/quiz.html"

        newDiv.appendChild(iframe)

        targetRow.appendChild(newDiv)
    }
})