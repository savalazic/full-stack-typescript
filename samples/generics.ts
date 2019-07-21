// generic function
function cloneArray<T>(array: T[]): T[] {
  return array.slice(0);
}

interface HasName {
  name: string;
}

const heroes: HasName[] = [
  { name: 'Superman' },
  { name: 'Batman' },
  { name: 'Flash' },
  { name: 'Wonder Woman' }
];
const clonedHeroes = cloneArray(heroes);

const numbers = [1, 2, 3];
const clonedNumbers = cloneArray(numbers);

// generic class
class SuperCharacter {
  constructor(public name: string) {}
}

class Hero1 extends SuperCharacter {}
class Villain extends SuperCharacter {}

class SuperTeam<T extends SuperCharacter> {
  constructor(public members: T[], public leader: T) {}
}

const captainAmerica = new Hero1('Captain America');
const thor = new Hero1('Thor');

const avengers = new SuperTeam([captainAmerica, thor], captainAmerica);

const luthor = new Villain('Luthor');
const bizaarro = new Villain('Bizarro');

const mixed = new SuperTeam([captainAmerica, thor, luthor, bizaarro], thor);
