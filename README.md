# `require('@ltd/j-gzip')`

调用**常驻**子进程进行 `gzip` 相关的**异步** `CPU` 密集型运算，以利用多核硬件资源，避免阻塞主进程。

子进程一旦发生错误（除了数据源问题导致的解压失败），模块将自行锁闭并拒绝任何新的请求，以避免引发更为严重的后果。

## API

### `.gzipBuffer(buffer, gzipLevel)` `async` 方法

-   用途：对 `Buffer` 进行指定等级的 `gzip` 压缩。
-   参数：
    *   `buffer`
        -   用途：要压缩的 `Buffer`。
        -   类型：`Buffer`
    +   `gzipLevel`
        -   用途：压缩等级。
        -   类型：`1` 至 `9` 之间的整数

### `.gzipString(string, gzipLevel)` `async` 方法

-   用途：对字符串进行指定等级的 `gzip` 压缩。
-   参数：
    *   `buffer`
        -   用途：要压缩的字符串。
        -   类型：`string`
    +   `gzipLevel`
        -   用途：压缩等级。
        -   类型：`1` 至 `9` 之间的整数

### `.unzipBuffer(buffer)` `async` 方法

-   用途：对 `gzip` 类压缩数据进行解压。
-   参数：
    *   `buffer`
        -   用途：要解压的 `Buffer`。
        -   类型：`Buffer`
