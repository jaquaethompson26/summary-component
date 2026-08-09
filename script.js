const readMoreLinks = document.querySelectorAll(".read-more");

readMoreLinks.forEach(function (readMore) {
    readMore.addEventListener("click", function (event) {
        event.preventDefault();

        const details = readMore.previousElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            readMore.textContent = "Read less";
        } else {
            details.style.display = "none";
            readMore.textContent = "Read more";
        }
    });
});