var getModulePath = require('./fis/utils.js').getModulePath;
var ignoreModulePaths = require('./fis/ignore.module.config.js');
var modulePaths = require('./fis/module.config.js');

////////////////////资源发布配置////////////////////

fis.config.set('wwwPath', './build');
fis.set('project.files', ['src/**', 'node_modules/**']);
fis.set('project.ignore', fis.get('project.ignore').concat([
  '**.md',
  '**.json'
]));
fis.set('project.md5Length', 8);

//开发打包
fis.media('dev_test')
    .match('*.html', {
        optimizer: fis.plugin('dfy-html-minifier', {
          removeComments: true,
          collapseWhitespace: true
        })
    })
    .match('*.{js,vue}', {
        optimizer: fis.plugin('uglify-js', {
            compress: {
                warnings: false,
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

//上线打包
fis.media('prod')
    .match('*.{js,vue}', {
        optimizer: fis.plugin('uglify-js', {
            compress: {
                warnings: false,
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

// es6编译
fis.match('/src/pages/**/*.js', {
  parser: fis.plugin('babel-6.x')
});

//vue单文件编译以及es6编译
fis.match('/src/**.vue', {
  isMod: true,
  useSameNameRequire: true,
  parser: [
    fis.plugin('vue-component', {
      runtimeOnly: true,
      extractCSS: true,
      cssScopedFlag: null
    }),
    fis.plugin('babel-6.x')
  ],
  rExt: '.js'
});

////////////////////模块化开发////////////////////

//用amd方式包装模块
fis.hook('module' , {
    mode: 'amd',
    // 把 factory 中的依赖，前置到 define 的第二个参数中来。
    forwardDeclaration: true,
    paths: modulePaths
});

//模块化文件配置
fis.match('/src/pages/**/*.js', {
    isMod: true
});

//模块化文件配置
fis.match('/node_modules/**/*.js', {
    isMod: true,
    useHash: false
});

// require.js本身不需要模块化，否则报错
fis.match('/node_modules/requirejs/require.js', {
    isMod: false,
    useHash: false
});

////////////////////打包配置////////////////////

//打包配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        allInOne: {
            js: '${filepath}_aio.js',
            css: '${filepath}_aio.css',
            includeAsyncs: true, // 包含异步加载的模块
            ignore: ignoreModulePaths
        },
        scriptPlaceHolder: '<!--SCRIPT_PLACEHOLDER-->',
        useInlineMap: true // 资源映射表内嵌
    })
});
