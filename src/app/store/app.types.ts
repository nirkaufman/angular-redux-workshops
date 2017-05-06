export interface AppState {
  api?: Api;
  user?: User;
  users?: User[];
}

export interface Api {
  pending: true;
  errorMsg?: string;
}

export interface User {
    created: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}
