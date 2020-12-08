/* --- STATE --- */
import { Posts } from '../../components/PostMinList/types';
export interface HomeState {
  posts: Posts;
}

export type ContainerState = HomeState;
