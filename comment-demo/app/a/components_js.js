var Component = React.createClass({
        getStyle: function  () {
            return {
              color: 'green'
            };
        },
        componentWillMount: function  () {
            console.log('will mount');
        },
        render: function  () {
            console.log('render');
            return (
                <div>
                  <h1 ref="title" style={this.getStyle()}>123s</h1>
                  <div ref="content">content</div>
                </div>
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
    <Component />,
    document.getElementById('example')
);
