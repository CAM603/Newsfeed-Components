/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'First Lambda Student Hired by Elon Musk',
    date: 'November 23rd, 2019',
    firstParagraph: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.`,

    secondParagraph: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.`,

    thirdParagraph: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.`
  }
];

function articleCreator(object) {

  // Create div
  const article = document.createElement('div');

  // Add div class
  article.classList.add('article');

  // Create h2
  const title = document.createElement('h2');

  // Add h2 text content via parameter
  title.textContent = object.title;

  // Attach h2 to div
  article.prepend(title);

  // Create paragraph 
  const paragraph = document.createElement('p');

  // Add class to paragraph
  paragraph.classList.add('date');

  // Add text to paragraph via parameter
  paragraph.textContent = object.date;

  // Add paragraph in div
  article.appendChild(paragraph);

  // Create more paragraphs, add text content via parameters and add to div
  let subParagraph1 = document.createElement('p');
  subParagraph1.textContent = object.firstParagraph;
  article.appendChild(subParagraph1);

  let subParagraph2 = document.createElement('p');
  subParagraph2.textContent = object.secondParagraph;
  article.appendChild(subParagraph2);

  let subParagraph3 = document.createElement('p');
  subParagraph3.textContent = object.thirdParagraph;
  article.appendChild(subParagraph3);

  // Create span
  let button = document.createElement('span');

  // Add text to button so it shows up
  button.textContent = '▽';

  // Add class to span
  button.classList.add('expandButton');

  // Add to div
  article.appendChild(button);

  // Add event listener to button
  button.addEventListener('click', function(event) {
    article.classList.toggle('article-open');
    event.target.textContent = '△';
  });

  // Add a close button that closes article
  let buttonClose = document.createElement('span');
  buttonClose.classList.add('closeButton');
  buttonClose.textContent = '❌';
  article.appendChild(buttonClose);

  buttonClose.addEventListener('click', () => {
    article.style.display = 'none';
  });
  
  return article;
}

// Map over array and add articles to articles div
let array = data.map(el => articleCreator(el));

let articlesDiv = document.querySelector('.articles')
array.forEach(el => articlesDiv.appendChild(el));

// Create a form that will allow you to write your own article

// Add article creator div to DOM
let bod = document.querySelector('body');

let createArticle = document.createElement('div');

createArticle.classList.add('create');

bod.appendChild(createArticle);


let titleForm = document.createElement('form');
titleForm.id = "articleInfo";

// Create title header form and input
let titleHeader = document.createElement('h3');
titleHeader.textContent = 'Title'
titleForm.appendChild(titleHeader);

let titleInput = document.createElement('input');
titleInput.type = 'text';
titleForm.appendChild(titleInput);
createArticle.appendChild(titleForm);


// Create date header form and input
let dateHeader = document.createElement('h3');
dateHeader.textContent = 'Date'
titleForm.appendChild(dateHeader);

let dateInput = document.createElement('input');
dateInput.type = 'text';
titleForm.appendChild(dateInput);

// Create textarea header form and input
let textHeader = document.createElement('h3');
textHeader.textContent = "Add your story here";
titleForm.appendChild(textHeader);

let textInput = document.createElement('textArea');
textInput.type = 'text';
titleForm.appendChild(textInput);

// Create submit button
let submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
titleForm.appendChild(submitButton);

// Add listener to form
const addForm = document.forms['articleInfo'];

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = addForm.querySelectorAll('input[type="text"], textarea');
  //value.forEach(el => console.log(el.value))

  function customArticleCreator(arr) {

    // Create div
    const article = document.createElement('div');
    // Create h2
    const title = document.createElement('h2');
    // Create paragraph 
    const paragraph = document.createElement('p');
    // Create more paragraphs, add text content via parameters and add to div
    const subParagraph = document.createElement('p');
    // Create span
    const button = document.createElement('span');
  
    // Add div class
    article.classList.add('article');
    // Add class to paragraph
    paragraph.classList.add('date');
    // Add class to span
    button.classList.add('expandButton');
  
    // Add h2 text content 
    title.textContent = arr[0].value;
    // Add text to date
    paragraph.textContent = arr[1].value;
    // Add text to main paragraph
    subParagraph.textContent = arr[2].value;
    // Add text to button so it shows up
    button.textContent = '▽';
    
    // Attach h2 to div
    article.prepend(title);
    // Add paragraph in div
    article.appendChild(paragraph);
    article.appendChild(subParagraph);
    // Add to div
    article.appendChild(button);
  
    // Add event listener to button
    button.addEventListener('click', function(event) {
      article.classList.toggle('article-open');
      event.target.textContent = '△';
    });
  
    // Add a close button that closes article
    let buttonClose = document.createElement('span');
    buttonClose.classList.add('closeButton');
    buttonClose.textContent = '❌';
    article.appendChild(buttonClose);
  
    buttonClose.addEventListener('click', () => {
      article.style.display = 'none';
    });

    return article;
  }
  articlesDiv.appendChild(customArticleCreator(value));
});

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
