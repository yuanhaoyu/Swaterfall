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
	            template: template
	        }
	    )
	```
	其中构造函数，接受2个参数 data 是json数组(注意里面必须有src属性)，也就是你瀑布流里面要加载的数据，第二个参数是个对象，里面有boxs和template 2个属性，boxs是你要布局的列的dom对象数组，template是一个函数，默认一个参数，返回写你的字符串模版 如下所示
	
	```javascript
		let template = function (data) {
			return `
			<div><img src="${data.src}"></img><p>${data.text}</p></div>
			`
		}
	```

2. init

	```javascript
	swaterfall.init()
	```
	生成瀑布流

3. add

	```javascript
	swaterfall.add(data)
	```
	添加内容，data如初始化的介绍。

## Feature

- [x] 将模版dom 升级为模版方法
- [ ] 继续升级为单一模版方式
- [ ] 性能优化

## Preview
<a href="https://yuanhaoyu.github.io/Swaterfall/index.html">点击预览<a/>