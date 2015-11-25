## 生命周期
mounting

### 挂载
- getInitialState
- componentWillMount
- componentDidMount


### 更新
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate


### 移除
- componentWillUnmount


挂载的方法，即组件插入到真正的dom 之后可用的方法
- getDOMNode
    这个方法在0.13.4 之中已经被废弃了,推荐用ReactDom.findDOMNode 参数为示例或者名称
    ```
         var Component = React.createClass({
        componentWillMount: function  () {
            console.log('will mount');
        },
        render: function  () {
            console.log('render');
            return (
                <div>
                  <h1 ref="title">123s</h1>
                  <div ref="content">content</div>
                </div>
            );
        },
        componentDidMount: function  () {
            console.log('did mount');
            var dom = this.refs.title;// 引用realy dom
            console.log(dom.innerHTML);
            var dom2 = ReactDOM.findDOMNode(this.refs.title);
            console.log(dom2.innerHTML);
        }
      });
      `Warning: Component.getDOMNode(...) is deprecated. Please use ReactDOM.findDOMNode(instance) instead.`
    ```
- forceUpdate
 这个没去验证过


### tools
react-tools
npm install -g react-tools
jsx --watch src/ build/
jsx 后的两个参数是文件夹
