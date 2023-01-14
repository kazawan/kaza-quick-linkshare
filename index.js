const axios = require('axios');
const cheerio = require('cheerio');


function quicklink(url,debug = false){
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            const html = res.data;
             $ = cheerio.load(html)
            let title = $('title').text()
            let firstP = $('p').first().text()
            let firstImg = $('img').first().attr('src')
            if(debug){
            console.log('debuging')
            console.log(title);
            console.log(firstP);
            console.log(firstImg);
            }
            resolve({
                title: title,
                firstP: firstP,
                firstImg: firstImg
            })
            
        })
    })
}






module.exports = quicklink







