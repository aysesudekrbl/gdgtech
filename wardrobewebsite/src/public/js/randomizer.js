function get_random_tshirt(){
    const arr = tshirts_array || [];
    if (arr.length === 0) return;
    const random_index = Math.floor(Math.random() * arr.length);
    // Zaten "/images/tshirts/1.webp" geldiği için sadece dizideki elemanı atıyoruz
    document.getElementById("tshirtphoto").src = arr[random_index];
}

function get_random_jacket(){
    if (jackets_array.length === 0) return;
    const random_index = Math.floor(Math.random() * jackets_array.length);
    document.getElementById("jacketphoto").src = jackets_array[random_index];
}

function get_random_trousers(){
    if (trousers_array.length === 0) return;
    const random_index = Math.floor(Math.random() * trousers_array.length);
    document.getElementById("trousersphoto").src = trousers_array[random_index];
}

function get_random_shoes(){
    if (shoes_array.length === 0) return;
    const random_index = Math.floor(Math.random() * shoes_array.length);
    document.getElementById("shoesphoto").src = shoes_array[random_index];
}

function randomize_all(){
    get_random_tshirt();
    get_random_jacket();
    get_random_trousers();
    get_random_shoes();
}