export default class BaseRegisterModel {
  constructor(
    email = null,
    password = null,
    correct = false,
    isTrainer = false
  ) {
    this.email = email;
    this.password = password;
    this.correct = correct;
    this.isTrainer = isTrainer;
  }
}
