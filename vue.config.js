const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack:config=>{
      config.resolve.alias
          .set('@',resolve('src'))
          .set('assets',resolve('src/assets'))
          .set('comps',resolve('src/components'))
          .set('configs',resolve('src/configs'))
          .set('datas',resolve('src/datas'))
          .set('libs',resolve('src/libs'))
          .set('router',resolve('src/router'))
          .set('services',resolve('src/services'))
          .set('store',resolve('src/store'))
          .set('views',resolve('src/views'))
    },
    devServer: {
        proxy: {
            "/api": {
                // target:"https://api.allyx.cn:5457/",
                target: "http://web.juhe.cn:8080/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false
};