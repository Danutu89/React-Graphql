import { PostNodeConnection } from 'gql-types';

export interface Posts {
  results: PostNodeConnection;
  loading: boolean;
  error: string;
}
