
export interface RegisterBodyDAO {
  name: string;
  email: string;
  password: string;
}

export interface LoginBodyDAO {
  email: string;
  password: string;
}