
document.addEventListener("DOMContentLoaded", async () => {
    const stitchesList = document.getElementById("stitches-list");

    try {
        // fetch stitches from the API
        const response = await fetch("/api/stitches");
        const stitches = await response.json();

        // get rid of any loading text
        stitchesList.innerHTML = "";

        // loop through each stitch and create a "card" element
        stitches.forEach(stitch => {
            const card = document.createElement("div"); // make a div
            card.className = "stitch-card"; // give it the card style

            // HTML structure for each stitch
            card.innerHTML = `
                <h2>${stitch.name} <span class="abbr">(${stitch.abbreviation})</span></h2>
                <span class="difficulty ${stitch.difficulty.toLowerCase()}">${stitch.difficulty}</span>
                <h3>Steps:</h3>
                <ol class="steps">
                    ${stitch.steps.map(step => `<li>${step}</li>`).join("")}
                </ol>
            `;

            // add the card
            stitchesList.appendChild(card);
        });
    } catch (err) {
        // error
        stitchesList.innerHTML = "⚠️ Error loading stitches";
        console.error(err);
    }
});
