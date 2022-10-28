// create grid elements
let grid_container = document.querySelector('.grid-container');

let grid_items = [];

for (let i=0;i<9;i++) {
    let grid_box = document.createElement('div');
    grid_box.setAttribute('class','grid-box');
    grid_container.appendChild(grid_box);
}