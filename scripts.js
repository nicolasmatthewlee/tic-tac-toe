// create grid elements
let grid_container = document.querySelector('.grid-container');

let checkmove = (event) => {
    console.log(event.target.dataset.index);
    
    let xmlns="http://www.w3.org/2000/svg";

    let marker=document.createElementNS(xmlns,'svg');
    marker.setAttributeNS(null,'viewBox','0 0 24 24');
    marker.setAttribute('class','marker');
    
    let path=document.createElementNS(xmlns,'path');
    path.setAttributeNS(null,'d','M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z');
    marker.appendChild(path);

    event.target.appendChild(marker);
}

for (let i=0;i<9;i++) {

    // create grid-box and add to grid-container
    let grid_box = document.createElement('div');
    grid_box.setAttribute('class','grid-box');
    grid_box.setAttribute('data-index',i);
    grid_box.addEventListener('click',checkmove);
    grid_container.appendChild(grid_box);

}