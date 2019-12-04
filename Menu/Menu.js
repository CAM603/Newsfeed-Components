/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menuCreator(arr) {

  // Create div
  let menuDiv = document.createElement('div');

  // Add class to div
  menuDiv.classList.add('menu');

  // Create unordered list
  let list = document.createElement('ul');

  // Add list to div
  menuDiv.appendChild(list);

  //Create list items from array
  let itemArr = arr.map(el => {
    let item = document.createElement('li');
    item.textContent = el;
    return item;
  })

  //Add list items to unordered list
  itemArr.forEach(el => list.appendChild(el));

  // Another possible solution

  // arr.forEach(el => {
  //   let item = document.createElement('li');
  //   item.textContent = el;
  //   list.appendChild(item);
  // })

  // Add event listener to menu button
  let menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
    gsap.from(".menu--open", {duration: 2, xPercent: -150});
  })
  
  return menuDiv;
}

// Select header and add menu component

let header = document.querySelector('.header');
header.appendChild(menuCreator(menuItems));


/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
