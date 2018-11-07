export class PasswordChange {
  private guid: string;

  private userName: string;

  private uid: string;

  private requestTime: string;

  private changeTime: string;

  private invalidChangeReason: string;

  public getUserName(): string {
    return this.userName;
  }

  public setUserName(value: string) {
    this.userName = value;
  }

  public getGuid(): string {
    return this.guid;
  }

  public setGuid(value: string) {
    this.guid = value;
  }

  public getUid(): string {
    return this.uid;
  }

  public setUid(value: string) {
    this.uid = value;
  }

  public getRequestTime(): string {
    return this.requestTime;
  }

  public setRequestTme(value: string) {
    this.requestTime = value;
  }

  public getChangeTime(): string {
    return this.changeTime;
  }

  public setChangeTme(value: string) {
    this.changeTime = value;
  }

  public getInvalidChangeReason(): string {
    return this.invalidChangeReason;
  }

  public setInvalidChangeReason(value: string) {
    this.invalidChangeReason = value;
  }
}
