var Component = React.createClass({displayName: "Component",
        getStyle: function  () {
            return {
              color: 'red'
            };
        },
        componentWillMount: function  () {
            console.log('will mount');
        },
        render: function  () {
            console.log('render');
            return (
                React.createElement("div", null, 
                  React.createElement("h1", {ref: "title", style: this.getStyle()}, "123s"), 
                  React.createElement("div", {ref: "content"}, "content")
                )
            );
        },
        componentDidMount: function  () {
            console.log('did mount');
            var dom = this.refs.title;// 引用realy dom
            console.log(dom.innerHTML);
            debugger;
            var dom2 = ReactDOM.findDOMNode(this.refs.title);
            console.log(dom2.innerHTML);
        }
      });
ReactDOM.render(
    React.createElement(Component, null),
    document.getElementById('example')
);
