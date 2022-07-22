

var fs = require('fs');
var path = require('path')
var multer = require('multer');

/**
 * 处理 multipart/form-data 类型文件
 */
class Multer {
  /**
   * 
   * @param {Object} options 
   * @param {Object} options.folderName 文件夹名称
   * 
   */
  constructor(options) {
    // let {
    //   folderName = ''
    // } = options
    // this.diskStorage(folderName)
  }

  upload(){
    return multer({ storage: this.storage })
  }
  
  diskStorage(folderName){
    
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        let folderPath = `public/${folderName}`
        try {
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
          }
          cb(null, folderPath)
        } catch (err) {
          console.error(err)
        }
      },
      filename: function (req, file, cb) {
        let extname = path.extname(file.originalname)
        cb(null, file.fieldname + '-' + Date.now() + extname)
      }
    })
  }

}

module.exports = new Multer()