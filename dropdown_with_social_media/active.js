//Notes:
//1. Set Attribute=========
//var intro = document.getElementsByClassName(‘intro’); 
//intro.setAttribute(‘id’, ‘Introduction_ 1’)



const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const listItem = document.getElementById('list');
const opt = document.getElementsByClassName('options');

for(option of opt){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        listItem.classList.toggle('hide');
    } 
}

// =========2nd Method to add class==========
// //Set Attribute Practice====
// listItem.setAttribute('class', 'hide');
// // **Hide the Other Menu Items

// //Toogle for showing Menu Items
// selectField.onclick = function(){
//     // console.log("I am clicked");
//     // listItem.removeAttribute('class', 'hide');
//     listItem.classList.toggle('hide');
// }


selectField.onclick = function(){
        listItem.classList.toggle('hide');
    }

