import { HomeState } from 'app/containers/Home/types';
import { AppState } from 'app/global/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  home?: HomeState;
  app?: AppState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
