import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
	entry: {
		bundle: './src/index.js',
        styles: './src/index.scss',
        html: './src/index.html'
	},
	resolve: {
        extensions: ['.js', '.sass', '.scss']
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[hash:5].[ext]',
							publicPath: './'
						}
					}
				]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				type: 'asset/resource',
			},
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
		],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // favicon: './src/assets/favicon.png',
            inject: 'body',
        })
	]
};
