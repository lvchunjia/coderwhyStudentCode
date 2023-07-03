const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 1.参数一: query类型参数
  // /home/list?offset=100&size=20
  // 1.1.解析url
  const urlString = req.url;
  const urlInfo = url.parse(urlString);

  // 1.2.解析query: offset=100&size=20
  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);
  console.log(queryInfo.offset, queryInfo.size);

  res.end("hello world aaaa bbb");
});

server.listen(8000, () => {
  console.log("服务器开启成功~");
});
