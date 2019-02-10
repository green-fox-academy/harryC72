'use strict';

// Create an animal shelter where we can save and take care of Animals

export class Animal {
  name: string;
  isHealthy: boolean;
  healCost: number;

  constructor(animalName: string = 'Animal', animalHealth, animalHealing) {
    this.name = animalName;
    this.isHealthy = animalHealth;
    this.healCost = animalHealing;
  }

  heal(): void {
    this.isHealthy = true;
  }

  isAdoptable(): boolean {
    if (this.isHealthy) {
      return true;
    }
  }

  toString(): string {
    if (!this.isHealthy) {
      return `${this.name} is
           not healthy (${this.healCost}€) and not adoptable`;
    } else {
      return `${this.name} is healthy and adoptable`;
    }
  }

  
  getRandomNumber(min: number, max: number): number {

    return Math.floor(Math.random() * (max - min + 1) + min);
  }



}