var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var majiang;
(function (majiang) {
    var majiangtanAui = (function (_super) {
        __extends(majiangtanAui, _super);
        function majiangtanAui() {
            var _this = _super.call(this) || this;
            _this.skinName = tan;
            return _this;
        }
        majiangtanAui.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return majiangtanAui;
    }(AnimationBase));
    majiang.majiangtanAui = majiangtanAui;
    __reflect(majiangtanAui.prototype, "majiang.majiangtanAui");
})(majiang || (majiang = {}));
//# sourceMappingURL=majiangtanAui.js.map