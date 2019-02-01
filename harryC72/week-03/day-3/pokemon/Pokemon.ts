
export class Pokemon {
  name: string;
  type: string;
  effectiveAgainst: string;

  constructor(inputName: string, inputType: string, inputEffectiveAgainst: string) {
      this.name = inputName;
      this.type = inputType;
      this.effectiveAgainst = inputEffectiveAgainst;
  }

  isEffectiveAgainst(pokemon: Pokemon): boolean {
      return this.effectiveAgainst === pokemon.type;
  }
}