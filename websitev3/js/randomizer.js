tshirts_array = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.jpg"

]
    

jackets_array = [
    "1.webp",
    "2.webp",
    "3.jpg"
]

trousers_array = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

shoes_array = [
    "1.webp",
    "2.webp",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]


function get_random_tshirt(){
    random_index = Math.floor(Math.random() * tshirts_array.length);
    selected_tshirt = tshirts_array[random_index]
    document.getElementById("tshirtphoto").src = `./images/tshirts/${selected_tshirt}`
}


function get_random_jacket(){
    random_index = Math.floor(Math.random() * jackets_array.length);
    selected_jacket = jackets_array[random_index]
    document.getElementById("jacketphoto").src = `./images/jackets/${selected_jacket}`
}

function get_random_trousers(){
    random_index = Math.floor(Math.random() * trousers_array.length);
    selected_trousers = trousers_array[random_index]
    document.getElementById("trousersphoto").src = `./images/trousers/${selected_trousers}`
}

function get_random_shoes(){
    random_index = Math.floor(Math.random() * shoes_array.length);
    selected_shoes = shoes_array[random_index]
    document.getElementById("shoesphoto").src = `./images/shoes/${selected_shoes}`
}

function randomize_all(){
    get_random_tshirt();
    get_random_jacket();
    get_random_trousers();
    get_random_shoes();
}