const button = document.getElementById("actionButton");
const catImage = document.getElementById("catImage");

button.addEventListener("click", async () => {
  try {
    // fetch random cat
    const response = await fetch("https://cataas.com/cat?type=square"); 
    if (!response.ok) throw new Error("Failed to fetch cat");
    
    // build blob url for image
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    // update img src
    catImage.src = imageUrl;

    // update button text
    button.textContent = "Next 🐾";
  } catch (error) {
    console.error(error);
    button.textContent = "Try Again";
  }
});
