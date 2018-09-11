// 不使用循环语句（包括map、forEach方法）实现一个100长度的数组，索引值和值相同的数组[0,1,2,3,4,5........99]

var arr = new Array(100);
//方法1
//扩展运算符（spread）是三个点（...）
[...arr.keys()];
//方法二
Array.from(arr.keys());
// 使用map
//方法三
function newArr(){
	var arr=new Array(100);
	return arr.fill('temp').map(function(item,index,array){
		return index;
	})
}
//方法四
var a = Array(100).join(',').split(',').map(function(item, index) {
　　return index;
});

// 一行代码实现数组去重
[...new Set([1,2,3,1,'a',1,'a'])]
