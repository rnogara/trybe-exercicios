class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades= [];
    this._assignmentsGrades= [];
  }

  get enrollment(): string { return this._enrollment };
  set enrollment(value: string) { this._enrollment = value };

  get name(): string { return this._name };
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  };

  get examsGrades(): number[] { return this._examsGrades};
  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._examsGrades = value;
  };

  get assignmentsGrades() { return this._assignmentsGrades};
  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._assignmentsGrades = value;
  };

  sumGrades(): number {
    return [... this.examsGrades, ...this.assignmentsGrades]
      .reduce((curr, acc) => acc += curr, 0);
  }

  sumAverageGrade(): number {
    const sum = this.sumGrades();
    const qnt = this.examsGrades.length + this.assignmentsGrades.length;
    return Math.round(sum / qnt);
  }
}