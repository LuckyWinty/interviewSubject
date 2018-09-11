//事件机制
//浏览器缓存，以及200状态下怎么实现 from cache
//继承
//三大框架区别
// //js垃圾回收机制
// 1 标记清除（mark and sweep）
// 2 引用计数（reference counting）
//事件循环机制 https://www.jianshu.com/p/12b9f73c5a4f
//web安全
// 1.XSS， 跨站脚本攻击(Cross Site Scripting), 也就是跨站脚本注入

// 攻击方法：
// 1. 手动攻击:
// 编写注入脚本，比如”/><script>alert(document.cookie());</script><!--等，
// 手动测试目标网站上有的input, textarea等所有可能输入文本信息的区域
// 2. 自动攻击
// 利用工具扫描目标网站所有的网页并自动测试写好的注入脚本，比如：Burpsuite等
// 防御方法：
// 1. 将cookie等敏感信息设置为httponly，禁止Javascript通过document.cookie获得
// 2. 对所有的输入做严格的校验尤其是在服务器端，过滤掉任何不合法的输入，比如手机号必须是数字，通常可以采用正则表达式
// 3. 净化和过滤掉不必要的html标签，比如：<iframe>, alt,<script> 等
// 4. 净化和过滤掉不必要的Javascript的事件标签，比如：onclick, onfocus等
// 5. 转义单引号，双引号，尖括号等特殊字符，可以采用htmlencode编码 或者过滤掉这些特殊字符
// 6. 设置浏览器的安全设置来防范典型的XSS注入
// 2.SQL注入

// 攻击方法：
// 编写恶意字符串，比如‘ or  1=1--等，
// 手动测试目标网站上所有涉及数据库操作的地方
// 防御方法：
// 1. 禁止目标网站利用动态拼接字符串的方式访问数据库
// 2. 减少不必要的数据库抛出的错误信息
// 3. 对数据库的操作赋予严格的权限控制
// 4. 净化和过滤掉不必要的SQL保留字，比如：where, or, exec 等
// 5. 转义单引号，上引号，尖括号等特殊字符，可以采用htmlencode编码 或者过滤掉这些特殊字符
// 3.CSRF，（Cross-site request forgery）,也就是跨站请求伪造

// 就是攻击者冒用用户的名义，向目标站点发送请求
// 防范方法：
// 1. 在客户端进行cookie的hashing，并在服务端进行hash认证
// 2. 提交请求是需要填写验证码
// 3. 使用One-Time Tokens为不同的表单创建不同的伪随机值  

//按需加载路由怎么加载对应的chunk文件的？换句话说浏览器怎么知道什么时候加载这个chunk，以及webpack是怎么识别那个多个经过hash过的chunk文件

