export interface IUser {
  email: string;
  password: string;
  confirmPassword?: string;
  username?: string;
  location?: string;
}

export interface IAuth {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  user: IUser;
}
