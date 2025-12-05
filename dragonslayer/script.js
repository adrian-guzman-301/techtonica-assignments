let song = document.getElementById('song');
song.volume = 0.1

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
    return `${this.name} is ${date.getFullYear() - this.birthYear} years old!`;
  }
}

let playerOrDragonDeathMessage = ['YOU DIED!', 'YOU SLAYED THE DRAGON!'];
//text to be displayed upon dragon's death
let playerWinMessage = playerOrDragonDeathMessage.pop()
//text to be displayed upon player victory
let dragonWinMessage = playerOrDragonDeathMessage.shift()

//make Character instance of dragon with nested arrays/objects of relevant descriptors
const dragon = new Character(
  'Kalameet',
  'Primordial Archdragon',
  {
    markOfCalamity: `You are engulfled in red light and loud screeching, telekinetic powers making you levitate in front of the dragon's red crest.`,
    swoop: `The dragon flies up into the air and flips over mid-air, swooping down at you.`,
    blackfireInferno: `The dragon flies high above and breathes black fire on the entire area.`,
    jawSnap: `The dragon darts their head to their sides while lurching forward, curshing you with powerful jaws and spiked snout.`,
    tailImpalement: `You are impailed by the dragon's tail.`,
  },
  100,
  ['Calamity Ring', 'Obsidian Greatsword', `60,000,000,000 souls`],
  -99999999999999999,
)


//make knight subclass of character class with nested arrays/objects
const knight = new Character(
  'Chosen Undead',
  'Hollow',
  [
    {hitOne: `You hit the dragon!`},
    {hitTwo: `You hit the dragon, again!`},
    {hitThree: `You stun the dragon, giving you a chance at a killing blow!`},
    {hitFour: `You cut of the dragon's tail! The dragon's staggering!`},
    {hitFive: `You climb the dragon and stab the top of its head!`},
  ],
  100,
  ['Greatsword', 'Leather Shield'],
  1500,
)

let playerKillsDragon = knight.attacks[4].hitFive

let swingCounter = 0;
let hitCounter = 0;
let missCounter = 0;
  //an event listener placed on the swing button

document.getElementById('swing-sword').addEventListener("click", swingSword);

//this if/else logic is buggy on certain win/loss, text-should-appear-now conditions
function swingSword() {
  let hitOrMiss = Math.random();
  swingCounter++
  document.getElementById('swings').innerText = `Swings: ${swingCounter}`
  if(hitOrMiss < 0.5) {
    missCounter++
    document.getElementById('misses').innerText = `Misses: ${missCounter}`
  if(swingCounter === 10 && hitCounter < 5) {
      document.getElementById('defeat-message').innerText = dragonWinMessage
    }
  } else {
    hitCounter++
    document.getElementById('dragon-health').innerText = `Dragon Health: ${dragon.health = dragon.health - 20}`
    document.getElementById('hits').innerText = `Hits: ${hitCounter}`
    if(swingCounter <= 10 && hitCounter === 5) {
      document.getElementById('hit-message').innerText = knight.attacks[4].hitFive.toUpperCase()
      document.getElementById('victory-message').innerText = playerWinMessage
    }
  }
}