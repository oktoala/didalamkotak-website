const image = document.querySelectorAll("img");
const lazy = document.createAttribute("loading");
lazy.value = "lazy";

for (let i = 0; i< image.length; i-=-1){
    image[0].setAttributeNode(lazy);
}