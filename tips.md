# outline
- UnMount什么时候被调用
- this.props.children属性？
- 如何做一个组件的loader
- mixins:[]的特点

## UnMount什么时候被调用
组件被销毁的时候被调用，组件什么时候被销毁呢？
组件被销毁是组件最外层的容器，被remove的时候才会触发组件Unmount，
这个Unmounting 的过程是递归往字组件传递。
有趣的问题，是
<Parent><Child></Child></Parent>
这种情况下Child组件的WillUnMount没有被调用，不知道为什么？

## this.props.children属性？
这个属性只有在组件之间有标签嵌套的时候才会生效
例如
<Parent>
    <Child></Child>
    <Child></Child>
</Parent>
此时在parent组件的中可以通过this.props.children属性得到2个
Child的组件实例

## 如何做一个组件的loader
通过React.createElement
这个方法接收三个参数
1. 组件名称/父容器
2. props 属性
3. 子元素
## mixins:[]的特点
minxin中的方法如果和当前组件中的方法存在同名的方法的话？
那么两个方法都会被执行，只不过先执行mixins中的方法在执行组件的方法


`以上结论测试于以下代码`
```
import React from 'react'
import ReactDOM from 'react-dom'
        /**
         * UnMount
         * 必须调用定容容器？
         * 从最外层的app 递归的unmount
         * 如果是通过<Parent><Child></Child<</Parent>
         * 那么Child 的销毁方法不会被调用
         *
         */
>测试代码如下
/**
 * react 生命周期的几个方法，
 */
class ChildApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c:1
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('...调用shouldComponentUpdate', nextProps, nextState);
        return true;
    }
    componentWillUpdate() {
        console.log('...调用componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('...调用componentDidUpdate');
    }
    componentWillMount() {
        console.log('childrenApp',this.props.children)
        console.log('...调用componentWillMount');
    }
    componentDidMount() {
        console.log('...调用componentDidMount');
        // console.log('parent get children', this.props.children)
    }
    componentWillReceiveProps(nextProps) {
        console.log('...调用componentWillReceiveProps,这里可以更改state',nextProps, this.props);
        this.setState({
            c: nextProps.count
        })
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount====');
    }
    onClick() {
        /**
         * UnMount
         * 必须调用定容容器？
         * 从最外层的app 递归的unmount
         * 如果是通过<Parent><Child></Child<</Parent>
         * 那么Child 的销毁方法不会被调用
         *
         */
        var ospan = document.getElementById('react-dom');
        var com = ospan;
        console.log(com);
        ReactDOM.unmountComponentAtNode(
            com
        );
        com.remove()
    }
    render () {
        console.log('...调用render');
        return (<div>
                这是子元素接收父元素的状态{this.props.count}
                子元素的状态{this.state.c}
                <span id="aaa" onClick={this.onClick}>111aaa</span>
            </div>);
    }
}

class Grandson extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>grandson tag</div>);
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount-Grandson====');
    }
}
export default class Ceshi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1
        }
    }
    componentWillUnmount() {
        console.log('=====componentWillUnmount-Ceshi====');
    }
    onClick(e) {
        var count = this.state.count;
        this.setState({
            count: ++count
        });
        console.log(this.props.children, '--children--');
    }
    render () {
        console.log(this.state);
        return (
            <div id="test">
                <button onClick={this.onClick.bind(this)}>点击</button>
                <ChildApp {...this.state}>
                    <Grandson></Grandson>
                    <Grandson></Grandson>
                </ChildApp>
            </div>
        );
    }
```


}
