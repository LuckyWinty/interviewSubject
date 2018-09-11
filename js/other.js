// .js bind 实现机制？手写一个 bind 方法
function bind(fn, context){
    return function (){
       return fn.apply(context, arguments);
    }
  }
  // 柯理化函数思想   感谢pursuitTom的提出
  Function.prototype.bind = function (context) {
      var args = Array.prototype.slice.call(arguments, 1);
      var _this = this;
      return function () {
          var thisArgs = [].slice.call(arguments);
          return _this.apply(context, args.concat(thisArgs))
      };
  }
  // ES6写法 感谢waterc的提出
  Function.prototype.bind = function(context, ...res) {
      let self = this
      return function(...arg) {
          return self.apply(context, [...res,...arg])
      }
  }
  