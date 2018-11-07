export class PasswordResetRequest {
  private userName: string;

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(value: string) {
    this.userName = value;
  }
}
