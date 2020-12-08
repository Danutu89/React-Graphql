/**
 *
 * Asynchronously loads the component for LoginModal
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoginModal = lazyLoad(
  () => import('./index'),
  module => module.LoginModal,
);
