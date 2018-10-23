/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-10-22 20:10:22 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-23 21:01:04
 */
'use strict'
const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.base.config');
base.devServer = {
	contentBase: path.join(__dirname, 'dist'),
	compress: true,
	port: 8000,
	hot: true,
	inline: true,
	host: 'localhost',
	openPage: 'index.html',
	disableHostCheck : true,
	open: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	proxy : {
		// '/api': 'http://localhost:3000',
		// pathRewrite: {'^/api' : ''}
	}
};
base.devtool = 'inline-source-map';
// base.module.rules[0].use.unshift('css-hot-loader');
base.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
const config = {
	...base
};
module.exports = config;
