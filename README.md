# `require('@ltd/j-gzip')`

基于原生多线程的 `promisify` 异步 `gzip` 相关的 `CPU` 密集运算。

原本是 `spawn` 子进程实现对多核 `CPU` 的充分利用，并避免阻塞主进程。
现在基于原生 `gzip` `unzip` 异步方法派生线程的方案，更好地达到这一目的。

压缩选项参数被简化为压缩等级参数；
压缩占用内存等级为最高，其它选项值缺省。

## API

### `.gzipAsync(data, level)` `async` 方法

-   用途：对 `data` 进行指定等级的 `gzip` 压缩。
-   参数：
    *   `buffer`
        -   用途：要压缩的数据。
        -   类型：`Buffer` `string`
    *   `level`
        -   用途：指定压缩等级。
        -   类型：`1` 至 `9` 之间的整数

### `.gzipSync` 方法

原生的同步压缩方法；压缩选项参数被简化为压缩等级参数。

### `.gzip` 方法

原生的异步压缩方法（基于回调）；压缩选项参数被简化为压缩等级参数。

### `.unzipAsync(data)` `async` 方法

-   用途：对 `gzip` 类压缩数据进行解压。
-   参数：
    *   `buffer`
        -   用途：要解压的数据。
        -   类型：`Buffer`

### `.unzipSync` 方法

原生的同步压缩方法。

### `.unzip` 方法

原生的异步压缩方法（基于回调）。
