function Fighter(fighterData) {
  let maxhp = fighterData.hp
  let name = fighterData.name;
  let damage = fighterData.damage;
  let hp = fighterData.hp;
  let agility = fighterData.agility;
  let countOfWins = 0;
  let countOfLosses = 0;

  this.getName = function () {
    return name
  }
  this.getDamage = function () {
    return damage
  }
  this.getAgility = function () {
    return agility
  }
  this.getHealth = function () {
    return hp
  }
  this.logCombatHistory = function () {
    console.log(`Name ${name}, Wins: ${countOfWins}, Losses: ${countOfLosses}`);
  }
  this.heal = function (hpHeal) {
    hpHeal + hp > maxhp ? hp = maxhp : hp += hpHeal;
  }
  this.dealDamage = function (damageToMe) {
    damageToMe > hp ? hp = 0 : hp -= damageToMe;
  }
  this.addWin = function () {
    countOfWins++;
  }
  this.addLoose = function () {
    countOfLosses++;
  }

  this.attack = function (defender) {
    const variableForRandom = 100;
    let attackRate = Math.floor(Math.random() * variableForRandom) + 1;
    if (attackRate > defender.getAgility()) {
      defender.dealDamage(damage);
      console.log(`${name} make ${damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${name} attack missed`);
    }
  }
}

function battle(fighter1, fighter2) {
  let fight=true;
  if (fighter1.getHealth===0){
    console.log(`${fighter1.getName()} is Dead and can't fight `);
    fight=false;
  }
  if (fighter2.getHealth===0){
    console.log(`${fighter2.getName()} is Dead and can't fight `);
    fight=false;
  }

  while (fight) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
      fighter1.addWin();
      fighter2.addLoose();
      console.log(`${fighter1.getName()} win`);
      break;
    }
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
      fighter2.addWin();
      fighter1.addLoose();
      console.log(`${fighter2.getName()} win`);
      break;

    }
  }
}


