/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// export { default as wrapRootElement } from './src/redux/store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PreviewStoreProvider } from 'gatsby-source-prismic'

import store from './src/redux/store/store';

export const wrapRootElement = ({ element }) => {
  return (
	<PreviewStoreProvider>
		<Provider store={store}>
			{element}
		</Provider>
	</PreviewStoreProvider>
  );
}