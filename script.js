


for(let i = 0; i < 10; i++){
const newP = document.createElement('p');
newP.innerText = i;




newP.style.width = '80px';
newP.style.height = '50px';
newP.style.border = '1px solid black';
newP.style.backgroundColor = 'aqua';
newP.style.textAlign = 'center';

document.body.append(newP);





function changeColor(){
    
    newP.classList.toggle('active');
    
}
newP.addEventListener('click', changeColor);


function addText(){
    
    newP.innerText = 'active';
    
}
newP.addEventListener('click', addText);


function onclick(){
    newP.classList.move('active');
}
newP.addEventListener('click', onclick);

}

// ----------------------------------------------------------------------
// -----------------------------------------------------------------------


// for(let i = 0; i < 10; i++){
//     let newP = document.createElement('p');
//     newP.innerText = ('Hello world, i am new Student');
//     document.body.append(newP);

//     function onclick(){
//         newP.innerText = '**************************';
//     }
//     newP.addEventListener('click', onclick);
// }

// ------------------------------------------------------------------------