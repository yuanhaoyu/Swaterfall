# Swaterfall
---
Swaterfall 是一款简单麻瓜的图片瀑布流插件,用固定列的方式实现瀑布流。(注意当前版本只适用于带图片的瀑布流)

## Version
当前版本: 0.00

## How to use
1.	初始化

	```javascript
	      var swaterfall = new Swaterfall(
	        data,
	        {
	            boxs: listDoms,
	            templates: templates
	        }
	    )
	```
	其中构造函数，接受2个参数 data 是json数组(注意里面必须有src属性)，也就是你瀑布流里面要加载的数据，第二个参数是个对象，里面有boxs和templates 2个属性，boxs是你要布局的列的dom对象数组，templates是你要生成的dom元素数组。

2. init

	```javascript
	swaterfall.init()
	```
	生成瀑布流

3. add

	```javascript
	swaterfall.add(data, templates)
	```
	添加内容，data和templates如初始化的介绍。

## Feature

- [ ] 将模版dom 升级为模版方法

## Preview
<a href="https://yuanhaoyu.github.io/Swaterfall/index.html">点击预览<a/>