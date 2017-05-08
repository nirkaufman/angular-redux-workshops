export interface AppState {
  user?: User;
  list?: Item[];
}

export interface User {
  firstName: string;
  email: string;
}

export interface Item {
    created: string;
    title: string;
    completed: string;
    edit: string;
}
