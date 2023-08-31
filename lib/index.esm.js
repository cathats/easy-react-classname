var EasyClassName = /** @class */function () {
  function EasyClassName(styles, mode) {
    var _this = this;
    if (mode === void 0) {
      mode = "normal";
    }
    this.createClassName = function (name, controlClass) {
      if (controlClass === void 0) {
        controlClass = {};
      }
      return {
        className: _this.create(name, controlClass)
      };
    };
    this.styles = styles;
    this.mode = mode;
  }
  EasyClassName.prototype.create = function (name, controlClass) {
    var _this = this;
    if (controlClass === void 0) {
      controlClass = {};
    }
    var _classNames = [];
    name.split(" ").forEach(function (v) {
      var _styleName = _this.mode === "module" && _this.styles[v] ? _this.styles[v] : v;
      _classNames.push(_styleName);
    });
    Object.keys(controlClass).forEach(function (key) {
      if (!controlClass[key]) return;
      var _styleName = _this.mode === "module" && _this.styles[key] ? _this.styles[key] : key;
      _classNames.push(_styleName);
    });
    return _classNames.join(" ");
  };
  return EasyClassName;
}();

export { EasyClassName };
