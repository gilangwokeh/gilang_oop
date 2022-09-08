export default class Name {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public get _name(): string {
    return this.name;
  }


  public full(): string {
    if (this.name === '') {
      return this.name;
    }
    return this.name;
  }
}