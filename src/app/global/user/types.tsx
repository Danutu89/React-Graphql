interface UserPayload {
  username: string;
}

export interface UserState {
  token: string | null;
  refreshToken: string | null;
  payload: UserPayload | null;
  isLoggedIn: boolean;
}
