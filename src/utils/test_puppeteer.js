/** 
 *
 * @file
 * @desc puppeteer demo测试
 * @author zhangdi 
 * @date 2022-08-05 14:09:52 
**/
const puppeteer = require('puppeteer');
const fs = require('fs')
const { createCanvas, loadImage } = require('canvas');

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log(`延迟等待${time / 1000}S`)

      resolve()
    }, time)
  });
}

// rgb转HEX
function rgb2hex(rgb) {
  var reg=/(\d{1,3}),(\d{1,3}),(\d{1,3})/;
  var arr=reg.exec(rgb);

  function hex(x) {
      return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  var _hex="#" + hex(arr[1]) + hex(arr[2]) + hex(arr[3]);
  return _hex.toUpperCase();
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1200,
      height: 1000
    }
  }).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://passport.jd.com/new/login.aspx');

    await page.click('.login-tab.login-tab-r')
    await page.type('#loginname', 'World', { delay: 100 });
    await page.type('#nloginpwd', 'World', { delay: 100 });

    await delay(2000)

    await page.click('.btn-img.btn-entry')

    await delay(2000)

    const bigimgInfo = await page.evaluate(() => {
      const bigimgEL = document.querySelector('body .JDJRV-bigimg img')
      let src = bigimgEL.src
      return Promise.resolve({
        base64Url: src,
        width: bigimgEL.width,
        height: bigimgEL.height
      })
    });

    const canvas = createCanvas(bigimgInfo.width, bigimgInfo.height);
    const context = canvas.getContext('2d')
    const image = await loadImage(bigimgInfo.base64Url)
    context.drawImage(image, 0, 0,bigimgInfo.width,bigimgInfo.height);
    


    const pixel = context.getImageData(0,0,1,1)
    var rgba = `rgba(${pixel.data[0]},${pixel.data[1]},${pixel.data[2]},${pixel.data[3]/255})`;
    console.log(rgba)
    

    // const vyImgEl = await page.$('.JDJRV-suspend-slide .JDJRV-bigimg')
    // await page.waitFor(1000);
    // await page.screenshot({ path: 'example.png', fullPage: true });
    // await fs.writeFile('./base64.png', bufferData, (err) => {
    //   if (err) {
    //     console.log('写入文件错误')
    //   } else {
    //     console.log('写入文件成功')
    //   }
    // })

    // await browser.close();
  });

})();