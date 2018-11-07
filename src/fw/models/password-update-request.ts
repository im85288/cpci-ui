export class PasswordUpdateRequest {
  private password: string;

  private confirmedPassword: string;

  public getPassword(): string {
    return this.password;
  }

  public setPassword(value: string) {
    this.password = value;
  }

  public getConfirmedPassword(): string {
    return this.confirmedPassword;
  }

  public setConfirmedPassword(value: string) {
    this.confirmedPassword = value;
  }
}
