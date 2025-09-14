const button = document.getElementById("actionButton");
const catImage = document.getElementById("catImage");
const restartbutton = document.getElementById("restartButton");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("https://cataas.com/cat?type=square");
        if (!response.ok) throw new Error("Failed to fetch cat");

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        catImage.src = imageUrl;

        button.textContent = "Next 🐾";
    } catch (error) {
        console.error(error);
        button.textContent = "Try Again";
    }
});

restartbutton.addEventListener("click", ()=> {

    catImage.src = "nyan_cat.gif";

    button.textContent = "Start";

});
