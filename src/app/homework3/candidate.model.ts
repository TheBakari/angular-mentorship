export class Candidate {
  id: number;
  firstName: string;
  lastName: string;
  birthday: number | string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    birthday: number | string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}
