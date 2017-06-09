var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'一起期待下一期的课程',
	'cid':348
});

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=3a7203fb-3d41-4499-bcc9-a8dde73c1e4e; imooc_isnew_ct=1493690403; loginstate=1; apsid=FkNzBkNWY1ZDNiOTllMTk3MWZiMjhhYjY1ZjRkMzYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDkzMzkzNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAxMTAzMDIzMDM3MDQ2OGEwZDkxZDAwOGNkYjkxOWZi%2Frx%2BWf68flk%3DMj; channel=491b6f5ab9637e8f6dffbbdd8806db9b_phpkecheng; PHPSESSID=s0djjn4dq5cd0sk3rj6ti42oi6; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1496300785,1496631001,1496645326,1496715074; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1496718166; imooc_isnew=2; cvde=59360f46c90de-31',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
	}
};

var req = http.request(options,function (res) {
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	res.on('end', function() {
		console.log('评论完毕！');
	});

});

	req.on('error', function() {
	    console.log('Error:'+e.message);
    });

    req.write(postData);

    req.end();