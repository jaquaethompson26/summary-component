const readMoreLinks = document.querySelectorAll(".read-more");

readMoreLinks.forEach(function (readMore) {
    readMore.addEventListener("click", function (event) {
        event.preventDefault();

        const details = readMore.previousElementSibling;

        if (details.classList.contains("open")) {
            details.classList.remove("open");
            readMore.textContent = "Read more";
        } else {
            details.classList.add("open");
            readMore.textContent = "Read less";
        }
    });
});