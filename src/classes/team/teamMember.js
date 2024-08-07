import { differenceInYears } from 'date-fns/esm';

class TeamMember {
  constructor(day, month, year, firstName, lastName, position) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(year, month - 1, day);
    this.position = position;
    this.checkPosition();
    this.lowercaseValues();
  }

  lowercaseValues() {
    this.firstName = this.firstName.toLowerCase();
    this.lastName = this.lastName.toLowerCase();
    this.position = this.position.toLowerCase();
  }

  capitalisedName() {
    const formatString = str =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return formatString(this.firstName);
  }

  listBy(order = 'last') {
    const formatString = str =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    this.firstName = formatString(this.firstName);
    this.lastName = formatString(this.lastName);

    return order === 'first'
      ? `${this.firstName} ${this.lastName}`
      : `${this.lastName}, ${this.firstName}`;
  }

  calculateAge() {
    const today = new Date();
    this.age = differenceInYears(today, this.birthdate);
  }

  sayAge() {
    this.calculateAge();
    return this.age;
  }

  sayPosition() {
    switch (this.position) {
      case 'crew':
        console.log(`I am a Crew`);
        break;
      case 'qc':
        console.log(`I am a QC`);
        break;
      case 'sm':
        console.log(`I am a Shift Manager`);
        break;
      case 'am':
        console.log(`I am a Assistant Manager`);
        break;
      case 'gm':
        console.log(`I am a General Manager`);
        break;

      default:
        break;
    }
  }

  checkPosition() {
    if (!this.position) {
      throw Error('A position must be defined to add a new member to the team');
    } else if (this.position !== 'crew' && this.position !== 'qc') {
      this.constructor = Manager;
    }
  }

  setPosition(position) {
    this.position = position;
    this.checkPosition();
  }
}

class Manager extends TeamMember {
  constructor(day, month, year, firstName, lastName, position) {
    super(day, month, year, firstName, lastName, position);
    this.checkManager();
  }

  checkManager() {
    const isAManager =
      this.position === 'sm'
        ? true
        : this.position === 'am'
        ? true
        : this.position === 'gm';

    if (isAManager) {
      console.log('Welcome to the Team Member Modifier');
    } else {
      console.log(
        'You are not a Manager. You are not allowed to make any modifications'
      );
    }
  }
}

export { TeamMember, Manager };
