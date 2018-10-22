/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-10-22 20:10:22 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-10-22 20:10:22 
 */
const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.base.config');
base.devServer = {
	contentBase: path.join(__dirname, 'dist'),
	compress: true,
	port: 8000,
	hot: true
};
base.devtool = 'inline-source-map';
base.module.rules[0].use.unshift('css-hot-loader');
base.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
const config = {
	...base
};
module.exports = config;
