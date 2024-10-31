const { log } = require('console');
const url=require('url');
const browseUrl='http://www.example.com:4000/exams/papers/2024/paper1.html?name=sri&age=21';
const myUrl=url.parse(browseUrl,true);//takes a url string,parses it and it will return url object
console.log('Protocol:'+myUrl.protocol);
console.log('Port:'+myUrl.port);
console.log('Host Details:'+myUrl.host);
console.log('Host name:'+myUrl.hostname);
console.log('Path:'+myUrl.path);
console.log('PathName:'+myUrl.pathname);
const query=myUrl.query;
console.log(query.name+''+query.age);





