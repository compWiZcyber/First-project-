let description = document.getElementById("description");
let guns = document.getElementById("guns");
let staff = document.getElementById("staff");
document.getElementById("myBtn").addEventListener("click", yamato);
description.textContent = "The Bismarck was Germany's first and lead ship of the Bismarck class. Ships in the same class share a common design, though individual details may differ.";
guns.textContent = "Eight 38 cm (15-inch) main guns were arranged in four twin turrets. Secondary guns and anti-aircraft weapons provided additional defense.";
staff.textContent = "A crew of roughly 2,200 officers and enlisted sailors operated the ship and its many weapons and systems.";

const revealElements = document.querySelectorAll(
    ".hero .eyebrow, #title, #title2, #description, .spec-card, .visual-panel, .info-panel, .page-footer"
);
const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 })
    : null;

revealElements.forEach((element, index) => {
    element.classList.add("reveal");
    if (element.classList.contains("spec-card")) {
        element.style.setProperty("--reveal-delay", `${(index % 4) * 100}ms`);
    }

    if (revealObserver) {
        revealObserver.observe(element);
    } else {
        element.classList.add("is-visible");
    }
});

let showingYamato = false;
function yamato() {

    if (!showingYamato) {
        document.getElementById("ship").textContent = "Yamato";
        document.getElementById("hull2").textContent = "Up to 410 mm";
        document.getElementById("status").textContent = "Sunk by aircraft, April 7, 1945"; 
        document.getElementById("pics").textContent = "Yamato was the largest battleship completed during World War II. Its heavy armor and 46 cm main guns reflected Japan's emphasis on battleship firepower.";
        document.getElementById("bigShip").src = "Ship.png"; 
        document.getElementById("gun2").src = "Yamato.png"; 
        document.getElementById("bigShip").alt = "The Japanese battleship Yamato";
        document.getElementById("gun2").alt = "An illustration of the Yamato";
        document.getElementById("description").textContent = "Built for the Imperial Japanese Navy, Yamato was the lead ship of its class and the largest battleship completed during World War II. At full load, it displaced about 72,000 tonnes.";
        document.getElementById("hull").textContent = "Yamato displaced about 72,000 tonnes at full load. Its main armor belt reached up to 410 mm in thickness.";
        document.getElementById("guns").textContent = "Nine 46 cm (18.1-inch) main guns—the largest ever mounted on a battleship—were installed in three triple turrets.";
        document.getElementById("staff").textContent = "More than 3,000 officers and sailors served aboard Yamato during its final mission.";
        document.getElementById("title").textContent = "The biggest battleship to ever be made";
        document.getElementById("title2").textContent = "The Yamato"; 
        document.getElementById("sunk").textContent = "Ships sunk by the Japanese force at Samar"; 
        document.getElementById("sunk2").textContent = "USS Johnston"; 
        document.getElementById("sunk3").textContent = "USS Hoel"; 
        document.getElementById("versatility").textContent = "A giant among battleships, armed with the largest naval guns of its era.";
        document.getElementById("myBtn").textContent = "Bismarck Info";
        document.getElementById("link").href = "https://www.britannica.com/topic/Yamato-ship";
        document.getElementById("link").textContent = "Learn more about the Yamato here!";  
        showingYamato = true;

    } else {
        document.getElementById("ship").textContent = "Bismarck";
        document.getElementById("hull2").textContent = "Up to 320 mm";
        document.getElementById("status").textContent = "Sunk May 27, 1941"; 
        document.getElementById("pics").textContent = "The Bismarck combined a heavily armored hull with a formidable main battery, making it one of the most notable battleships of the war.";
        document.getElementById("bigShip").src = "Bismarck.png"; 
        document.getElementById("gun2").src = "Guns.png"; 
        document.getElementById("bigShip").alt = "The German battleship Bismarck at sea";
        document.getElementById("gun2").alt = "The Bismarck's main guns";
        document.getElementById("description").textContent = "The Bismarck was Germany's first and lead ship of the Bismarck class. Ships in the same class share a common design, though individual details may differ.";
        document.getElementById("hull").textContent = "The Bismarck displaced about 50,000 tonnes at full load. Its armor belt reached up to 320 mm in thickness, protecting vital areas of the ship.";
        document.getElementById("guns").textContent = "Eight 38 cm (15-inch) main guns were arranged in four twin turrets. Secondary guns and anti-aircraft weapons provided additional defense.";
        document.getElementById("staff").textContent = "A crew of roughly 2,200 officers and enlisted sailors operated the ship and its many weapons and systems.";
        document.getElementById("title").textContent = "The Strongest battleship in WWII";
        document.getElementById("title2").textContent = "The Bismarck"; 
        document.getElementById("sunk").textContent = "Ships engaged by the Bismarck"; 
        document.getElementById("sunk2").textContent = "HMS Hood — sunk"; 
        document.getElementById("sunk3").textContent = "HMS Prince of Wales — damaged"; 
        document.getElementById("versatility").textContent = "A powerful silhouette, designed to command the horizon.";
        document.getElementById("myBtn").textContent = "Yamato Info";
        document.getElementById("link").href = "https://www.britannica.com/topic/Bismarck-German-ship";
        document.getElementById("link").textContent = "Learn more about the Bismarck here!"; 
        showingYamato = false;
    }
}
