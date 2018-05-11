## 什么是react
react 发源于facebook的php框架xhp的一个分支，旨在把对页面的渲染带到客户端来做。
react并不像并不是mv* 的一个框架，它本身只关心渲染的事情，可以认为是mv*
的view一层。

## react 只关心两个事情
- 如何更新DOM
- 如何响应事件

## JSX
jsx 就是javascript + xml ,jsx 被当做一种新的ecmascript 的新特性来设计，jsx 本质上是javascript
react 并不是jsx，只是react 支持jsx这种语法规则。
jsx的编译器主要解决是如何把便签转换为函数


## 虚拟dom
react 性能搞的原因在于引入虚拟dom的概念，能更快的更新dom，在虚拟dom中有复杂的算法去和之前的dom去做diff ，如果改动就做改变，目前我浅层次的理解是这样的。


## jsx
对jsx 语法的使用其实没有什么要说的，按照响应的api去做即可，表达式 写法也和一些框架或者库使用类似，比如说类似angular的差值表达式{{}}，只不过react换做{}而已，react 创建组件唯一必须的方法就是render方法了，
值得一提的react比较赞成组件的创建采用jsx 语法来做，但同时也支持不用jsx的形式。


## 特殊属性
由于jsx本质上是javascript ，所以for 和class特殊 无法使用
需要坐下替换，htmlFor， className


## react的生命周期
- 实例化
- 存在期
- 销毁 & 清理期间
每个不同的声明周期都提供一系列的方法，并且规定了可以更改的属性，
由于方法很多，这部分我这还是大概浏览，待后面用demo做深入的验证和学习


---------------
2015-11-07 周六 晚，白天出去打球了，晚上出去吃饭了，今天学的有点少




