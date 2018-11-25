var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      writing: "# h1\n## h2\n[a link](https:www.google.com)\n\nThis is `an inline = example`\n\n```\nsome code block\nexample\n```\n1. list item\n2. list item 2\n>A blockquote example\n\n![sample image taken from documentation](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n \n**Bold Text**\n\n" };















    _this.changeFunction = _this.changeFunction.bind(_this);return _this;
  }_createClass(App, [{ key: "changeFunction", value: function changeFunction(

    event) {
      this.setState({ writing: event.target.value });
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "container" },
          React.createElement("textarea", {
            id: "editor",
            value: this.state.writing,
            onChange: this.changeFunction }),


          React.createElement("div", null,
            React.createElement("div", {
              id: "preview",
              dangerouslySetInnerHTML: { __html: marked(this.state.writing) } }))));




    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("render-target"));
