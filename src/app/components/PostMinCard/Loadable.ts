/**
 *
 * Asynchronously loads the component for PostMinCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PostMinCard = lazyLoad(
  () => import('./index'),
  module => module.PostMinCard,
);
