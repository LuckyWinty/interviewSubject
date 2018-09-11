//基本数据类型（自身不可拆分的）：Undefined、Null、Boolean、Number、String、symbol
//引用数据类型（对象）：Object （Array，Date，RegExp，Function）
function gettype(nm){
    return Object.prototype.toString.call(nm);
}
