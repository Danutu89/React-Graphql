/**
 *
 * Asynchronously loads the component for PostMinList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PostMinList = lazyLoad(
  () => import('./index'),
  module => module.PostMinList,
);
