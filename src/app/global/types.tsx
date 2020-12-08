import { UserState } from './user/types';

export interface AppState {
  user: UserState;
}

export type ContainerState = AppState;
