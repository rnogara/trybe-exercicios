export default class Person{
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name(): string { return this._name; }
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get birthDate(): Date { return this._birthDate; }
  set birthDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
}