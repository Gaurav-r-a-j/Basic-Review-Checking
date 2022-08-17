// console.log('reviews')

let currentItem = 0;

const data = [
    {
        "name": "Aditya",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore repellat natus, eos perferendis corrupti fuga quibusdam magnam ",
        "image": "https://source.unsplash.com/random/?man",
        "profession": "Student"
    },
    {
        "name": "Rohan",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore repellat natus, eos perferendis corrupti fuga quibusdam magnam ",
        "image": "https://source.unsplash.com/random/?boy",
        "profession": "Developer"
    },
    {
        "name": "Palak",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore repellat natus, eos perferendis corrupti fuga quibusdam magnam ",
        "image": "https://source.unsplash.com/random/?flower",
        "profession": "Professor"
    },
    {
        "name": "Aditi",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolore repellat natus, eos perferendis corrupti fuga quibusdam magnam ",
        "image": "https://source.unsplash.com/random/?girl",
        "profession": "Teacher"
    },
]

const container = document.getElementById('container');
console.log(container);
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const image = document.getElementById("image");
const cardTitle = document.getElementById('cardTitle');
const cardText = document.getElementById('cardText');

const profession = document.getElementById("profession");


window.addEventListener('DOMContentLoaded', () => {
    switchPerson();
})

const switchPerson = () => {
    const item = data[currentItem];
    console.log(item);
    image.src = item.image;
    cardTitle.textContent = item.name;
    cardText.textContent = item.description;
    profession.textContent = item.profession;
}

rightButton.addEventListener('click', () => {
    currentItem++;
    console.log(currentItem);
    if (currentItem > (data.length) - 1) {
        currentItem = 0;
    }
    switchPerson();
})

leftButton.addEventListener('click', () => {

    currentItem--;
    if (currentItem < 0) {
        currentItem = (data.length) - 1;
    }
    console.log(currentItem);
    switchPerson();
})