import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import config from './webpack.config.js';

export default {
	...config,
	output: {
		path: resolve(resolve(), './dist'),
		filename: '[name].js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		port: 8080,
		hot: true
	},
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		})
	],
	mode: 'development'
};
