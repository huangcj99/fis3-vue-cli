## 环境搭建

1. 安装开发工具 [fis3](https://github.com/fex-team/fis3)   

    node版本: 4.1.1（6.x以上版本无法监听）

    ```shell
    npm install -g fis3 (文件较大，建议全局安装，本地依赖可不安装)
    npm install

    > 如果安装中遇到权限问题，可使用 ``sudo`` 安装，或者 ``sudo chown -R $USER /usr/local/lib/node_modules``

2. 项目目录

    ```shell
    ├── bin # 部署脚本
    |
    ├── build # 编译输出
    |
    ├── src # 源文件目录
    |   ├── assets # 网站公共资源以及全局css
    |   |
    |   ├── components # 公共组件
    |   |
    |   ├── libs # 库
    |   |
    |   ├── pages # 页面
    |   
    ├── fis
    |   ├── ignore.module.config.js # 不需要打包的文件列表
    |   ├── module.config.js # 模块别名设置
    |   ├── utils.js # fis配置工具
    |
    ├── fis-conf.js # fis3配置文件
    |
    ├── ...
    ```

3. 使用 [fis3] 进行本地开发

    ```
    shell
    fis3 server start     //开启后，默认进入localhost:8080 ，fis3 server stop可关闭服务器
    fis3 server clean     //清除fis3服务器下的缓存文件
    fis3 release -wL      //构建并监听文件，进入到相应页面进行开发

    ```

    如: localhost:8080/src/pages/test/test.html

4. 发布资源

    ```
    fis3 release dev_test  //编译测试包（具体看fis-config.js）
    fis3 release prod     //编译线上包
    ```

    项目默认构建发布目录路径为当前项目目录下的/build目录。(build下文件在重复构建后可能会有冗余，可自行编写脚本在构建前清除)



* 本地开发中使用文件监听、浏览器自动刷新。这个功能实际上是 ``fis3 release`` 命令的两个参数，文件监听 ``--watch`` 或 ``-w``， 自动刷新 ``--live`` 或 ``-L``，参数的位置任意，使用缩短参数的时候可以连写，因此以下用法均等价：

    ```shell
    fis3 release --live --watch
    fis3 release --watch --live
    fis3 release -L -w
    fis3 release -Lw
    fis3 release -wL
    ```

    启动文件监听后，不要关闭命令行窗口，编写代码保存即会自动构建、发布、刷新浏览器。
