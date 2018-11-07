export abstract class AlertsApi {
  success: (message: string, keepAfterNavigationChange: boolean) => void;

  error: (message: string, keepAfterNavigationChange: boolean) => void;

  openMessageDialog: (errorMessage: string, okButton: boolean, url: string) => void;
}
