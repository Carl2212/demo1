/**
 * Created by Deng on 2016/7/19.
 */
define(function(require,exports,module){
    var jq = require('jquery');
    console.log(jq);
    function ig(contrainer){
        this.contrainer = jq(contrainer);
        this.icon_ig = this.contrainer.children('img');
        this.spaning = [];
    }

    module.exports = ig;

    ig.prototype._init = function(){
        var spanings = this.spaning
        this.icon_ig.each(function(n){
            //每一个子项
            var height =random(60);
            var dog = random(360);
            console.log(dog);
            var node = jq(this);
            var timer;
            node.css({'float':'left','margin-top' : height+'px','transform':'rotate('+dog+'deg)'}).hover(function(){
                node.fadeTo(250,1)
                    .css('zIndex','1000')
                    .css('transform','rotate(0deg)');
            },function(){
                node.fadeTo(250,.6)
                    .css('zIndex','1000')
                timer && clearTimeout(timer);
                timer = setTimeout(spin,Math.ceil(random(10000)));
            })
            function spin() {
                node.css('transform','rotate('+dog+'deg)');
            }
            spanings[n] = spin;
        });
        return this;
    };
    ig.prototype._spin = function(){
        jq(this.spanings).each(function(xid,fn) {
            setTimeout(fn,Math.ceil(random(3000)));
        })
        return this;
    };
    ig.prototype.render = function(){
        this._init();//初始化hover方法以及原始css
        this.icon_ig.show();
        this._spin();//定时转动
    };
    function random(x) {
        return Math.random() *x;
    }
});