class Validation {
  constructor() {
    this.name = '';
    this.email = '';
    this.number = '';
    this.plan = '';
    this.planTime = '';
    this.addOns = [undefined, undefined, undefined];
  }

  validateInput(
    value,
    validationFunction,
    inputElement,
    notRequireElement,
    notRequireClass
  ) {
    const isValid = validationFunction(value);
    this.wrongData(isValid, inputElement, notRequireClass, notRequireElement);
    if (isValid) {
      this[inputElement.name] = value;
    }
  }

  nameValidation(name) {
    name = name.replace(/\s/g, '');
    return name.length >= 5;
  }

  emailValidation(email) {
    const pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return pattern.test(email);
  }

  numberValidation(number) {
    number = number.toString().replace(/[-+]/g, '');
    return (
      (number.length <= 11 && number.substring(0, 2) === '48') ||
      number.substring(0, 1) === '1'
    );
  }

  wrongData(isValid, inputElement, notRequireClass, notRequireElement) {
    inputElement.classList.toggle('wrong-data', !isValid);
    notRequireElement.classList.toggle(notRequireClass, isValid);
  }
}
