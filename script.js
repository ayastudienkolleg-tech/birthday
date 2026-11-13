const people = [
    // FAMILY — Chapters 1 to 19

    { name: "Dad", photo: "photos/dad.jpg", audio: "audios/tryout.ogg" },

    { name: "mommy", photo: "photos/mom.jpg", audio: "audios/mommy.ogg" },

    { name: "your little sissy Yassmine", photo: "photos/yassmine.jpeg", audio: "audios/yassmine.ogg" },

    { name: "your sissy Fatima", photo: "photos/fatima.jpeg", audio: "audios/ fatima.ogg" },

    { name: "your sissy Heba", photo: "photos/heba.jpeg", audio: "audios/heba.ogg" },

    { name: "teta", photo: "photos/teta.jpeg", audio: "audios/teta.ogg" },

    { name: "3amito", photo: "photos/3amito.jpeg", audio: "audios/3amito.ogg" },

    { name: "Rajl 3amito", photo: "", audio: "audios/rajl 3amto.ogg" },

    { name: "Asmaa", photo: "photos/asma.jpeg", audio: "audios/asmaa.ogg" },

    { name: "3amo Jamal", photo: "photos/3amo.jpeg", audio: "audios/3amo jamal.ogg" },

    { name: "Sara", photo: "photos/sarah.jpeg", audio: "audios/sarah.ogg" },

    { name: "Khalo Benacer", photo: "photos/khalo.jpeg", audio: "audios/khalo.ogg" },

    { name: "Mama Najat", photo: "", audio: "audios/mama najat.ogg" },    

    { name: "Mama Najat", photo: "", audio: "audios/mama najat.ogg" },

    { name: "Mama Najat", photo: "", audio: "audios/mama najat.ogg" },

    

    // FRIENDS — Chapters 19 to 25

    { name: "anas", photo: "photos/friends.jpeg", audio: "audios/anas.ogg" },

    { name: "Ali", photo: "photos/ali.jpeg", audio: "audios/ali.ogg" },

    { name: "Chaabi", photo: "photos/friends.jpeg", audio: "audios/chaabi.ogg" },

    { name: "Hamza", photo: "photos/friends.jpeg", audio: "audios/hamza.ogg" },

    { name: "Ilyass Brini", photo: "", audio: "audios/ilyas brini.ogg" },

    { name: "Ilyass Lasri", photo: "", audio: "audios/ilyass lasri.ogg" },


    // AYA — Chapter 26 ❤️

    {
        name: "AYA",
        photo: "photos/me.jpeg",
        audio: "audios/me.ogg",
        caption: "my fav person is you ♡"
    }
];
const welcome = document.getElementById("welcome");
const openButton = document.getElementById("open-book");
const bookContainer = document.getElementById("book-container");

let currentPage = 0;

people.forEach(function(person, index) {
    const page = document.createElement("section");
    page.className = "book-page";

    page.innerHTML = `
        <h2>Chapter ${String(index + 1).padStart(2, "0")} ♡</h2>

        <h3>A Message From ${person.name}</h3>

        <div class="polaroid">
            <div class="photo-placeholder">
            ${person.photo
                ? '<img src="' + person.photo + '" alt="A special memory">'
                : '<span>♡</span><p>Our Little Memory</p>'
            }
        </div>
            <p class="photo-caption">${person.caption || "A moment worth keeping ♡"}</p>
        </div>

        <p>Someone who loves you has a message❤️.</p>

        <div class="audio-box">
    <p>🎧 A klein voice message for dich Mostafa♡</p>

    ${person.audio
        ? '<audio controls src="' + person.audio + '"></audio>'
        : '<button disabled>▶️ Listen Soon</button>'
    }
</div>

        <div class="navigation">
            <button class="previous">← Previous</button>
            <button class="next">Next →</button>
        </div>

        <p>Page ${index + 1} of ${people.length}</p>
        ${index === people.length - 1
            ? '<p class="ending-message">The book may end here, but the love around you never will. ♡</p>'
            : ''
        }
    `;

    bookContainer.appendChild(page);
});

const pages = document.querySelectorAll(".book-page");

function showPage(index) {
    pages.forEach(function(page) {
        page.style.display = "none";
    });

    const page = pages[index];
    page.style.display = "block";
    currentPage = index;

    const previousButton = page.querySelector(".previous");
    const nextButton = page.querySelector(".next");

    previousButton.style.display = index === 0 ? "none" : "inline-block";

    nextButton.style.display =
        index === pages.length - 1 ? "none" : "inline-block";
}

openButton.addEventListener("click", function() {
    welcome.style.display = "none";
    showPage(0);
});

bookContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("next")) {
        if (currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }
    }

    if (event.target.classList.contains("previous")) {
        if (currentPage > 0) {
            showPage(currentPage - 1);
        }
    }
});