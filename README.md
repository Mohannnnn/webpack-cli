### webpack-cli
> 闲来无事搭了一个，基于webpack4的多页面脚手架。

## 开始步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### 项目结构

```
|-dist									#打包文件
|
|-build									#build目录
|		webpack.base.config.js			#基础文件
|		webpack.dev.config.js			#开发
|		webpack.prod.config.js			#生产
|-src									#目录文件
|		common							
|		html							#公用html
|		images							#公用image
|		js								#公用js
|		style							#公用样式
|		pages
|			index						#index页面（默认）
|				index.js
|				index.html
|				index.scss
|			other						#其他页面
|				XXX.js
|				XXX.scss
|				XXX.html
|.babelrc
|README.md
|package.json
|
```

### 说明
- 1.开发环境可在dev里配置代理。
- 2.
