////////////////////资源发布配置////////////////////
//打包压缩
fis.config.set('wwwPath', '/build');

//开发打包
fis.media('dev_test')
    .match('*', {
      deploy: fis.plugin('local-deliver', {
        to: fis.config.get('wwwPath')
      })
    });

//上线打包
fis.media('prod')
    .match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            compress: {
                drop_console: true
            }
        })
    })
    .match('*.css', {
        // fis-optimizer-clean-css 插件进行压缩，已内置
        optimizer: fis.plugin('clean-css')
    })

    .match('*.{js,css,png}', {
      //md5，控制缓存
      useHash: true
    })
    .match('*', {
      deploy: fis.plugin('local-deliver', {
        to: fis.config.get('wwwPath')
      })
    });

//////////////////资源编译处理//////////////////

// es6编译  wxjssdk模块使用babel编译会报错
fis.match('/src/page/**/*.js', {
  parser: fis.plugin('babel-6.x')
});

fis.match('/src/(**).vue', {
  id: '$1',
  isMod: true,
  useSameNameRequire: true,
  parser: [
    fis.plugin('vue-component', {
      runtimeOnly: true,
      extractCSS: false,
      cssScopedFlag: null
    }),
    fis.plugin('babel-6.x')
  ],
  rExt: '.js'
})

// 插件配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        allInOne: {
            js: '${filepath}_aio.js',
            css: '${filepath}_aio.css',
            includeAsyncs: true, // 包含异步加载的模块
            ignore: [
              // 大文件，不作为合并项
              '/node_modules/vue/dist/vue.js'
            ]
        },
        scriptPlaceHolder: '<!--SCRIPT_PLACEHOLDER-->',
        useInlineMap: true // 资源映射表内嵌
    })
});

////////////////////模块化开发////////////////////

//用amd方式包装模块
fis.hook('module' , {
    mode: 'amd',
    // 把 factory 中的依赖，前置到 define 的第二个参数中来。
    forwardDeclaration: true,
    paths: {
      // 声明公用组件
      'vue': '/node_modules/vue/dist/vue.js'
    }
});

//模块化文件配置
fis.match('/src/**/*.js', {
    isMod: true
});

fis.match('/node_modules/**.js}', {
    isMod: true
});

// require.js本身不需要模块化，否则报错
fis.match('/src/components_modules/require/2.1.18/require.js', {
    isMod: false,
    useHash: false
});
