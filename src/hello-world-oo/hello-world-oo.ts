export class Hello {
  suffix: string = "world";

  constructor(suffix: string = "world") {
    this.suffix = suffix;
  }

  holler() {
    return `hello, ${this.suffix}.`;
  }
}