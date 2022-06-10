

const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')
const show = document.querySelector('#show')
const collection = document.querySelector('#collection')

const colorBtn = () => {
        alert("Jaidyn's Favorite color is pink!")
    }
color.addEventListener('click', colorBtn);

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