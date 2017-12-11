const { readFileSync } = require('fs');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		extensions: ['.js', '.html']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: 'svelte-loader'
			}
		]
	},
	plugins: prod ? [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJSPlugin()
	] : [],
	devServer: {
		contentBase: './public'
	},
	devtool: prod ? false : 'inline-source-map'
};
