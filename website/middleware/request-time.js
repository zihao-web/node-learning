/**
 * 请求时间中间件
 * 
 * 选项：
 *  - time （超时阈值，默认 100）
 * 
 * @param {param} opts 
 */
module.exports = function(opts) {
  let time = opts.time || 100;
  return function(req, res, next) {
    let timer = setTimeout(function() {
      console.log(
        'is taking too long',
        req.method,
        req.url
      );
    }, time);

    let end = res.end;
    res.end = function(chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);
      clearTimeout(timer);
    };
    next();
  };
};