使用说明
---------

## 环境搭建

1. 安装开发工具 [fis3](https://github.com/fex-team/fis3)   

    node版本: 4.1.1（6.x版本无法监听）

    ```shell
    npm install -g fis3
    npm install fis3-hook-module -g     // "1.2.2",  
    npm install fis3-postpackager-loader -g     // "1.2.7",  
    npm install fis-postpackager-simple -g     // "0.0.26"  ,
    npm install fis-parser-handlebars-3.x -g     // "0.0.1",  
    npm install fis-spriter-csssprites -g     // "0.3.0",  
    npm install fis-postprocessor-jswrapper -g     // "latest"  

    //es6编译
    npm install fis-parser-babel-5.x -g    //1.4.0    

    > 如果安装中遇到权限问题，可使用 ``sudo`` 安装，或者 ``sudo chown -R $USER /usr/local/lib/node_modules``

2. clone xinfeng 和clone components_modules

    将两部分代码clone到本地后，需将components_modules拷贝到
    xinfeng-frontend/src/目录下

3. 使用 [fis3] 进行本地开发

    ```
    shell
    cd xinfeng-frontend/src   //进到src目录
    fis3 server start     //开启后，默认进入localhost:8080 ，fis3 server stop可关闭服务器
    fis3 server clean     //清除fis3服务器下的缓存文件
    fis3 release -wL      //构建并监听文件，进入到相应页面进行开发

    ```

    如: localhost:8080/page/test/

4. 发布资源

    ```
    cd xinfeng-frontend/src
    fis3 release prod     //编译打包到/build下
    ```

    项目默认构建发布目录路径为当前项目目录下的/build目录。



* 本地开发中使用文件监听、浏览器自动刷新。这个功能实际上是 ``fis3 release`` 命令的两个参数，文件监听 ``--watch`` 或 ``-w``， 自动刷新 ``--live`` 或 ``-L``，参数的位置任意，使用缩短参数的时候可以连写，因此以下用法均等价：

    ```shell
    fis3 release --live --watch
    fis3 release --watch --live
    fis3 release -L -w
    fis3 release -Lw
    fis3 release -wL
    ```

    启动文件监听后，不要关闭命令行窗口，编写代码保存即会自动构建、发布、刷新浏览器。
