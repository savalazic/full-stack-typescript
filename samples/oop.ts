enum Editor {
  MARVEL,
  DC
}

interface IHero {
  name: string;
  creationYear: number;
}

const batman: IHero = {
  name: 'Batman',
  creationYear: 1990
};

abstract class Hero {
  abstract createMessage(): string;
}

class SuperHero extends Hero implements IHero {
  private static readonly LABEL = 'HEY';

  constructor(
    readonly name: string,
    public _editor: Editor,
    public creationYear: number
  ) {
    super();
  }

  public createMessage() {
    return `
      Superhero: ${this.name}
      ${Editor[this._editor]}
      ${this.creationYear}
    `;
  }

  static printMessage(hero: SuperHero): string {
    return `
      ${SuperHero.LABEL} ${hero.name}, ${Editor[hero._editor]}
    `;
  }
}

interface ICanFly {
  fly(message: string): void;
}

class FlyingHero extends SuperHero implements ICanFly {
  public fly(message: string) {
    console.log(message, this.creationYear);
  }

  public createMessage() {
    return `FLYING HERO` + super.createMessage();
  }

  get editor(): string {
    return Editor[this._editor];
  }

  set editor(editorName: string) {
    this._editor = (<any>Editor)[editorName];
  }
}

const superman = new SuperHero('Superman', Editor.DC, 1938);

const greenLantern = new FlyingHero('Green Lantern', Editor.DC, 1959);

// console.log(superman.createMessage());
// console.log(greenLantern.createMessage());

greenLantern.editor = 'MARVEL';

// console.log(greenLantern.editor);

console.log(SuperHero.printMessage(superman));
