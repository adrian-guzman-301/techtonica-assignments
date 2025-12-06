//battle music
let song = document.getElementById('song');
song.volume = 0.05

//character class
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
//array of game-ending messages
let playerOrDragonDeathMessage = ['YOU DIED!', 'YOU SLAYED THE DRAGON!'];
//text to be displayed upon dragon's death
let playerWinMessage = playerOrDragonDeathMessage.pop()
//text to be displayed upon player victory
let dragonWinMessage = playerOrDragonDeathMessage.shift()

//Character instance of dragon with nested arrays/objects of relevant descriptors
const dragon = new Character(
  'Kalameet',
  'Primordial Archdragon',
  {
    //future refactoring: adding a random dragon attack text when the player dies to show how they died
    markOfCalamity: `You are engulfled in red light and loud screeching, telekinetic powers making you levitate in front of the dragon's red crest.`,
    swoop: `The dragon flies up into the air and flips over mid-air, swooping down at you.`,
    blackfireInferno: `The dragon flies high above and breathes black fire on the entire area.`,
    jawSnap: `The dragon darts their head to their sides while lurching forward, curshing you with powerful jaws and spiked snout.`,
    tailImpalement: `You are impailed by the dragon's tail.`,
  },
  100,
  ['Calamity Ring', 'Obsidian Greatsword', `60,000,000,000 souls`],
  //really old
  -99999999999999999,
)


//knight subclass of character class with nested arrays/objects
const knight = new Character(
  'Chosen Undead',
  'Hollow',
  [
    {cut: `You hit the dragon!`},
    {slash: `You hit the dragon, again!`},
    {criticalHit: `You stun the dragon, giving you a chance at a killing blow!`},
    {tailSever: `You cut of the dragon's tail! The dragon's staggering!`},
    {dragonDecapitation: `You climb the dragon and stab the top of its head!`},
  ],
  100,
  ['Greatsword', 'Leather Shield'],
  1500,
)
//how the player kills the dragon if player wins
let playerKillsDragon = knight.attacks[4].dragonDecapitation

//initial game variables
let swingCounter = 0;
let hitCounter = 0;
let missCounter = 0;
  //an event listener placed on the swing button

document.getElementById('swing-sword').addEventListener("click", swingSword);

//this if/else logic is buggy on certain win/loss conditions (win/loss text doesn't appear on some game-ending instances)
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
      //player adds dragon's held items to their own held items
      dragon.itemsHeld.forEach(item => knight.itemsHeld.push(item))
      //how the dragon dies
      document.getElementById('hit-message').innerText = knight.attacks[4].dragonDecapitation.toUpperCase()
      //win message
      document.getElementById('victory-message').innerText = playerWinMessage
    }
  }
}