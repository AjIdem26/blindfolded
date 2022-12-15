import { FormControl } from "@angular/forms";

/** Interface for user. */
export interface UserInterface {
  username: string;
  password: string;
  token?: string;
  isAdmin?: string;
}
/** Interface for user login form. */
export interface UserLoginFormInterface {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
