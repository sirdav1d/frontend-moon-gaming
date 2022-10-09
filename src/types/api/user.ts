export interface User {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  cpf: string;
  isAdmin: boolean;
}

export interface UserUpdate {
  user: User;
  id: string;
}

export interface UserResponse {
    id: string;
    email: string;
    name: string;
    password: string;
    cpf: string;
    isAdmin: boolean;
  
}