const axios = require('axios');
const cheerio = require('cheerio');
const D = require('./src/DomianMatch')






function quicklink(url, debug = false) {

    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            const html = res.data;
            $ = cheerio.load(html, {
                xml: true,
                xmlMode: true
            })
            let title = $('title').text()
            let firstP = $('p').first().text()
            //todo 获取图片这个要继续修改
            let firstImg = $('img').first().attr('src')
            let dataImg = $('img').attr('data-original-src')
            let getImg = $('img')
            let domain = D(url)
           
            //todo 继续优化
            // let i
            // for (i = 0; i < getImg.length; i++) {
            //     console.log(getImg[i].attribs['src'])
            // }

            if (debug) {
                console.log('debuging')
                console.log('title:', title);
                console.log('firstP:', firstP);
                console.log('firstImg:', firstImg);
                console.log('dataImg:', dataImg);
                console.log('domain:', domain)
                // console.log('getImg:', getImg[1].attribs['src']);
            
            }
            resolve({
                title: title,
                firstP: firstP,
                firstImg: firstImg,
                domain:domain,

            })

        })
    })
}


// function quicklink(url,debug = false){
//     return new Promise((resolve, reject) => {
//         axios.get(url).then(res => {
//             const html = res.data;
//              $ = cheerio.load(html)
//             let title = $('title').text()
//             let firstP = $('p').first().text()
//             let firstImg = $('img').first().attr('src')
//             if(debug){
//             console.log('debuging')
//             console.log(title);
//             console.log(firstP);
//             console.log(firstImg);
//             }
//             resolve({
//                 title: title,
//                 firstP: firstP,
//                 firstImg: firstImg
//             })

//         })
//     })
// }






module.exports = quicklink







