let turn_label_icon=document.querySelector('.turn-label-icon');

// game properties
let grid_values = new Array(9).fill(0);
let player = true;

// checks for a win, returns true if win
let check_win = () => {
    let win_sums=[
        [0,1,2],[3,4,5],[6,7,8], // rows
        [0,3,6],[1,4,7],[2,5,8], // columns
        [0,4,8],[2,4,6] // diagonals
    ]

    for (let i=0;i<win_sums.length;i++) {
        markers = win_sums[i].map((p)=>grid_values[p]);
        sum = Math.abs(markers.reduce((pv,cv) => pv+cv,0));

        if (sum==3) {
            return true;
        }
    }
    return false;
};

let check_move = (event) => {
    
    let index=event.target.dataset.index;

    // if grid-box not occupied, place marker
    if (grid_values[index]==0) {

        // add marker
        let xmlns="http://www.w3.org/2000/svg";
        let marker=document.createElementNS(xmlns,'svg');
        marker.setAttributeNS(null,'viewBox','0 0 24 24');
        marker.setAttribute('class',`marker player${player ? 1 : 2}`);
        let path=document.createElementNS(xmlns,'path');
        path.setAttributeNS(null,'d','M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z');
        marker.appendChild(path);

        event.target.appendChild(marker);

        // update array
        grid_values[index]=player ? 1 : -1;

        console.log(grid_values)

        // check if win
        check_win();

        // check if grid is filled

        // change player
        player=!player;

        // update turn-label-icon
        turn_label_icon.classList.toggle('player2');

    }
    
    
}

// create grid elements
let grid_container = document.querySelector('.grid-container');

for (let i=0;i<9;i++) {

    // create grid-box and add to grid-container
    let grid_box = document.createElement('div');
    grid_box.setAttribute('class','grid-box');
    grid_box.setAttribute('data-index',i);
    grid_box.addEventListener('click',check_move);
    grid_container.appendChild(grid_box);

}