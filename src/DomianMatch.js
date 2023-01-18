
/**
 * 
 * @param {String} url 输入一个正确的网址 
 * @returns 返回域名
 */
function getDomain(url){
    //todo 此处还有做验证是否网址或者在头部验证
    let result = url.match(/[\w-]+\.(com\.cn|org\.cn|net\.cn|com|net|org|gov|cc|biz|info|cn|co)/);
    return result
}

module.exports = getDomain