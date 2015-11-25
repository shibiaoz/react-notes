## 创建组件
- React.createClass
接收一个object，render方法返回相应的组件定义，
这里的Div等标签并不是Dom是react div 的组件示例，
是vitual dom

```
var Comment = React.createClass({
            render: function  () {
                return (
                    <div className="component">
                        <h2>{this.props.author}</h2>
                        {this.props.children}
                    </div>
                );
            }
        });
```

## 组件传值

- 调用组件传值

- props
props是可以认为通过自定义属性传值过来的
props.children 可以认为组件中的所有内容
```
var ComponentList = React.createClass({
            render: function  () {
                return (
                    <div className="component-list">
                        <Comment author="shibiao">this is shibiao</Comment>
                        <Comment author="huboss">
                            <ul>
                                <li>this is hoboss</li>
                                <li>this is hoboss</li>
                                <li>this is hoboss</li>
                                <li>this is hoboss</li>
                            </ul>
                        </Comment>
                    </div>
                );
            }
        });
```

## refs
ref 属性给子组件命名，通过 this.refs 引用 DOM
```
<input type="text" ref="text"/>
this.refs.text.value;
```

## this.props 是只读的


## HTML 实体
默认都是转义的
万不得已，可以直接使用原始 HTML。
```<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />```

## 数据流


## 默认 Prop 值


```
var ComponentWithDefaultProps = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  }
  /* ... */
});
```

