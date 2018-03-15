const path = require('path');

const filePath = {
    src : path.resolve(__dirname, '../components'),
    dist : path.resolve(__dirname, '../dist'),
    weichatDemo : path.resolve(__dirname,'../weiChatWebsite/dist')
}

module.exports=filePath;