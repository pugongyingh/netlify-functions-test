const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
const API_ENDPOINT = 'https://m.zhouyi.cc/bazi/hh/hehun.php';
//const API_ENDPOINT = 'https://api.subsume.io/hertingfordbury/v1/meetings';
exports.handler = ( event, context, callback ) => {
  let params = event.queryStringParameters
 let data = "txtName=%E6%9D%8E%E6%98%8E&data_type=0&cboYear=1980&cboMonth=10&cboDay=21&cboHour=17&cboMinute=52&pid=%E5%87%BA%E7%94%9F%E7%9C%81%E4%BB%BD&cid=%E5%87%BA%E7%94%9F%E5%8E%BF%E5%B8%82&zty=0&txtName2=%E6%96%B9%E7%BA%A2&data_type2=0&cboYear2=1982&cboMonth2=10&cboDay2=21&cboHour2=17-%E9%85%89&cboMinute2=52&pid2=&cid2=&zty2=0"
	//axios.get( API_ENDPOINT )
	//	.then( ( response ) => {
  axios.post(API_ENDPOINT,data, { responseType: "html" }).then(function(response){
  //  let html = iconv.decode(response.data, "gb2312");    
    
    
    // 也可以通过 params 对象传递参数
//axios.get('/user', {params: {ID: 12345}}).then(function (response) {
    
    
		//const	body = iconv.decode(response.data,'gb2312');
    	//const	body = iconv.decode(response.data,'utf-8').toString();
        const $resultsPage = cheerio.load(response.data);
 let hhh = '
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8" http-equiv="Content-Type">
<title>八字合婚在线测试-在线合八字算婚姻-测算生辰八字婚配-周易算命合婚_易安居吉祥网</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta name="twcClient" content="false" id="twcClient">
<link href="/css/html5v3style.css" rel="stylesheet" type="text/css">
</head>
<body>

<section>
<!--定义顶部锚点--> 
<a id="top" href="#"></a>
<div class="main quanle">
<header>
<div class="top_head">
<h2 class="top_logo"><a href="/"></a></h2>
<span class="top_ane"><a href="/">易安居吉祥网</a></span>
<a class="top_more" href="/sitemap.html"></a>
</div>

<div class="top_nav">
 <ul>
      <li class=""><a href="/">首页</a></li>
      <li class=""><a href='/fengshui/'>风水</a></li>
      <li class=''><a  href='/shengxiao/'>生肖</a></li>
      <li class=""><a href='/xiangshu/'>相术</a></li>
      <li class=""><a href='/bazi/' class='top_cur'>八字</a></li>
      <li class=""><a href='/xingming/'>姓名</a></li>
      <li class=""><a href='/zhouyi/'>周易</a></li>
      <li class=""><a href='/jiemeng/' >解梦</a></li>
      <li class=""><a  href='/xingzuo/'>星座</a></li>
      <li class=""><a href='/xuexing/'>血型</a></li>
      <li class=""><a href='/kaiyun/'>开运</a></li>
      <li class=""><a href='/ziwei/'>紫微</a></li>
      <li class=""><a href='/taluopai/'>塔罗</a></li>
      <li><a href="/lingqian/">灵签</a></li>
      <li><a href="/huangli/">黄历</a></li>
      <li><a href="/sitemap.html" class="blue" title="更多">更多</a></li>    
    </ul>
</div>
</header>
<div class="clear"></div>';
   let www = '</div>
<!---end center----->
<div class="footer">
           <div style="text-indent:-9999px"><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1255509762'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1255509762' type='text/javascript'%3E%3C/script%3E"));</script></div>  
</div>
	 </div>
     <a href="#top"><div id="btn_top"></div></a>
</section>
<script src="https://m.zhouyi.cc/js/indextop_new.js"></script>
 <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?5adac0d418e0b76d26baf344edb7eafd";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<script src="{dede:field name='phpurl'/}/count.php?view=yes&aid={dede:field name='id'/}&mid={dede:field name='mid'/}" type='text/javascript' language="javascript"></script>
<!------百度推送-------->
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>
<!------百度推送-------->
</body></html>'; 
    
    
    let questionss = $resultsPage('div[class="center"]').html();
      // let questionss = $resultsPage('div[class="con layui-text"]').text();
    questionss = hhh + questionss + www;
    //var xx=new GB2312UTF8();
    //var Utf8=xx.Gb2312ToUtf8(questionss);
    //var Gb2312=xx.Utf8ToGb2312(questionss);
    //var encoder = new TextEncoder('gbk');

   // var Utf8=encoder.encode(questionss);
			callback( null, {
				headers: {
         //'content-type': 'text/html; charset=gb2312',
         'content-type': 'text/html; charset=utf-8',
				},
				statusCode: 200,
     body: questionss,
      
			} );
		} )
		.catch( ( error ) => {
			callback( error );
		} );
};
