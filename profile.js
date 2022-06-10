
const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')
const show = document.querySelector('#show')
const collection = document.querySelector('#collection')


// color.addEventListener('click', () => {
//     alert("Jaidyn's favorite color is Pink!");
// })

// const colorBtn = (evt) => {
//         evt.preventDefault();
//         alert("Jaidyn's Favorite!")
//     }
// color.addEventListener('click', colorBtn);

place.addEventListener('click', () => {
    alert("Jaidyn's favorite place is the Dallas Aquarium!");
})

ritual.addEventListener('click', () => {
    alert("Jaidyn's favorite ritual is feeding her pets before bed!");
})

show.addEventListener('click', () => {
    alert("Jaidyn's favorite show is Pokemon!");
})

collection.addEventListener('click', () => {
    alert("Jaidyn collects figures, dolls, and stuffed animals!");
})