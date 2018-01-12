# Swaterfall
---
Swaterfall 是一款简单麻瓜的图片瀑布流插件,用固定列的方式实现瀑布流。(注意当前版本只适用于带图片的瀑布流)

## Version
当前版本: 0.03

## API
1.	初始化

	```javascript
	      var swaterfall = new Swaterfall(
	        {
	            boxs: listDoms,
	            template: template,
				srcKey: 'image_url',
            	done: () => { console.log('hi~ done'); }
	        }
	    )
	```
	其中构造函数，接受以个对象参数config，里面有boxs和template 2个属性。
	
	1.1 boxs：是你要布局的列dom对象数组（**注意Swaterfalll的原则是只会帮你做js的处理，布局方式由你自己决定，但是由于是通过计算列的最小高度进行处理的，所以请确保你这里提供列dom对象数组的每列高度是根据子元素自动变化的，（如demo中的浮动布局，父元素高度=子元素高度之和）**）。
	
	1.2 template：是一个函数，默认一个参数，返回写你的字符串模版 如下所示
	
	```javascript
		let template = function (data) {
			return `
			<div><img src="${data.image_url}"></img><p>${data.des}</p></div>
			`
		}
	```

	1.3 srcKey：是你data数组里面代表图片地址的键名，因为Swaterfall需要设置img的src，所以我们必须需要知道你json数组数据中代表图片地址的键名，若不设置则默认为src。
	
	1.4 done：为一个匿名函数，当每次add执行完成后会自动触发。


2. add

	```javascript
	swaterfall.add(data)
	```
	添加数据（**注意data是一个json数组**），然后Swaterfall会根据之前定义的模版循环data生成瀑布流。

## How to use
script标签引入swaterfall.js

```javasript
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
</body>
<script>
	// data json数组中src属性是必须的
    let data = [
	    {src: 'xxx',text: '13131'},
	    {src: 'xx', text: 'just test'}        
    ]
    let listDoms = [
        document.querySelector('.box1'),
        document.querySelector('.box2'),
        document.querySelector('.box3')
    ]
    let template = function (data) {
        return `
        <div>
        	<img src="${data.src}"></img>
        	<p>${data.text}</p>
        </div>
        `
    }
    
    // 初始化
    var swaterfall = new Swaterfall(
        {
            boxs: listDoms,
            template: template
        }
    )
    
    // 首次加载数据
    swaterfall.add(data);
</script>

```

## Preview

<a href="https://yuanhaoyu.github.io/Swaterfall/test/index.html">demo点击预览<a/>

	
## Feature

- [x] 将模版dom 升级为模版方法
- [ ] 继续升级为单一模版方式
- [ ] 性能优化