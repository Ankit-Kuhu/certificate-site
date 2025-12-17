// List of your site pages
const pages = [
    { name: "Home", url: "/Home.html" },
    { name: "Results", url: "/navigation/Result.html" },
    { name: "Admit Cards", url: "/navigation/Admit card.html" },
    { name: "Latest Jobs", url: "/navigation/Latest Jobs.html" },
    { name: "Answer Key", url: "/navigation/Answer key.html" },
    { name: "Admissions", url: "/navigation/Admission.html" }
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchBtn");

function showSuggestions(query) {
    suggestions.innerHTML = "";
    if (query) {
        const filteredPages = pages.filter(page =>
            page.name.toLowerCase().includes(query)
        );
        if (filteredPages.length > 0) {
            suggestions.style.display = "block";
            filteredPages.forEach(page => {
                const div = document.createElement("div");
                div.textContent = page.name;
                div.addEventListener("click", () => {
                    window.location.href = page.url;
                });
                suggestions.appendChild(div);
            });
        } else {
            suggestions.style.display = "none";
        }
    } else {
        suggestions.style.display = "none";
    }
}

function searchFirstMatch() {
    const query = searchInput.value.toLowerCase();
    const match = pages.find(page => page.name.toLowerCase().includes(query));
    if (match) {
        window.location.href = match.url;
    } else {
        alert("No matching page found.");
    }
}

searchInput.addEventListener("input", function () {
    showSuggestions(this.value.toLowerCase());
});

searchBtn.addEventListener("click", searchFirstMatch);

searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        searchFirstMatch();
    }
});

// Hide suggestions when clicking outside
document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = "none";
    }
});
