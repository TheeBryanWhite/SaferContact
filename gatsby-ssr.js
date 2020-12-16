/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
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
