const data = {
    main: [{ name: "Pizza", image: "pizza.jpg" }, { name: "Pasta", image: "pasta.jpg" }, { name: "Spaghetti", image: "spaghetti.jpg" }, { name: "Dal Khichidi", image: "dalKhichdi.jpg" }],
    starters: [{ name: "Paneer Manchurian", image: "paneer-manchurian.jpg" }, { name: "Mushroom Manchurian", image: "mushroom-manchurian.jpg" }, { name: "Babycorn Manchurian", image: "babycorn-manchurian.jpg" }],
    desserts: [{ name: "Rasgulla", image: "rasgulla.jpg" }, { name: "Gulab Jamun", image: "gulab-jamun.jpg" }, { name: "Tres Leches", image: "leches-cake.jpg" }],
    beverages: [{ name: "Mojito", image: "mojito.jpg" }, { name: "Choclate Milkshake", image: "chocolate-milkshake.jpg" }],
};


const handleClick = (key) => {
    const sections = Object.keys(data)
    sections.forEach((key) => {
        const item = document.getElementById(key)
        item.classList.add("hidden")

        const section = document.getElementById(`${key}-select`)
        section.style.backgroundImage = ""
    })

    const item = document.getElementById(key)
    item.classList.remove("hidden")

    const section = document.getElementById(`${key}-select`)
    section.style.backgroundImage = `linear-gradient(
                  rgba(30, 31, 42, 0.503),
                  rgba(58, 39, 45, 0.8)
                ), url('./assets/${data[key][0].image}')`
}


start = () => {
    Object.keys(data).forEach((key) => {
        document.getElementById(`${key}-select`).addEventListener("click", () => {
            handleClick(key)
        })
        const item = document.getElementById(key)
        item.classList.add("hidden")
        item.innerHTML = data[key].map((item) => {
            return `<div class="item" style="background-image: linear-gradient(
    rgba(30, 31, 42, 0.503),
    rgba(58, 39, 45, 0.8)), url('./assets/${item.image}')">${item.name}</div>`
        }).join("")
    })

    handleClick("main")
}

document.addEventListener("DOMContentLoaded", start);