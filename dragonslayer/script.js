let song = document.getElementById('song');
song.volume = 0.01

//make character class
class Character {
  constructor(name, species, attacks, health, itemsHeld, birthYear) {
    this.name = name;
    this.species = species;
    this.attacks = attacks;
    this.health = health;
    this.itemsHeld = itemsHeld;
    this.birthYear = birthYear;
  }
  age() {
    const date = new Date()
    return date.getFullYear() - this.birthYear;
  }
}

//text to be displayed upon player's death
const throughDeath = `YOU DIED`;

//make Character instance of dragon with nested arrays/objects of relevant descriptors
const dragon = new Character(
  'Kalameet',
  'Primordial Archdragon',
  {
    markOfCalamity: `You are engulfled in red light and loud screeching, telekinetic powers making you levitate in front of the dragon's red crest.`,
    swoop: `The dragon flies up into the air and flips over mid-air, swooping down at you.`,
    blackfireInferno: `The dragon flies high above and breathes black fire on the entire area.`,
    jawSnap: `The dragon darts their head to their sides while lurching forward, curshing you with their powerful jaws and spiked snout.`,
    tailImpalement: `You are impailed by the dragon's tail.`,
  },
  100,
  ['Calamity Ring', 'Obsidian Greatsword', `60,000 souls`],
  200,
)


//make knight subclass of character class with nested arrays/objects
const knight = new Character(
  'Chosen Undead',
  'Hollow',
  {
    parry: `You stun the dragon, giving you a chance at a killing blow.`,
    cutOffTail: `You cut of the dragon's tail!`,
    headStab: `You climb the dragon and stab its head.`,
  },
  100,
  ['Greatsword', 'Leather Shield'],
  1930,
)

let swingCounter = 0;
let hitCounter = 0;

//swingCounter variable needs to be rendered in the swing div
//hitsCounter variable needs to be rendered in the hit div
//missCounter variable needs to be rendered in the miss div
//dragonHealth variable needs to be rendered in the dragon health div

//make an array of swing success strings that will appear if hit successful
  //if hit successful, retrieve a string at random and display it on the webpage

//make an array of swing miss strings that will appear of hit fails to connect
  //if hit misses, retrieve a string at random and display it on the webpage

//make an array of strings of the different ways a dragon can kill you
  //if dragon kills knight, retrieve a string at random and display it on the webpage

//make an array of strings of the different ways you can kill a dragon
  //if knight kills dragon, retrieve a string at random and display it on the webpage

//an event listener needs to be placed on the swing button

//once the user clicks on the swing button, a function needs to run that calculates a 50% chance if the swing is successful or not

//inside the function, swingCounter goes up by one and increases swing counter by 1

//if the swing hits, hit counter goes up by one and dragon health goes down by 25%

//if swings reach 10 and dragon health is not at 0, dragon kills player
  //target player's death array and randomly retrieve a string to display in respective div

//if hits reach 4 and swings are 10 or less, player kills dragon
  //target dragon's death array and randomly retrieve a string to display in respective div