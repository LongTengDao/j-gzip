
`@ltd/j-gzip`
=============

Compression/decompression is a kind of `CPU` intensive operation.

Originally, this module tried to make full use of multi-core `CPU` and avoid blocking the main process through `spawn` sub-process;
later, it was found that the native `gzip` / `unzip` callback interface was originally implemented by derived threads, so now this module is only a simple encapsulation of the original method.

Firstly, based on the callback interface, the `promisify` interface is added.

Secondly, the compression parameter `options` is simplified to `level`;
the compression occupied memory level `memLevel` is the highest, and other options are default.

压缩/解压缩是一类 `CPU` 密集运算。

本来本模块尝试通过 `spawn` 子进程，实现对多核 `CPU` 的充分利用、避免阻塞主进程；后来发现原生 `gzip` / `unzip` 回调接口原本就是派生线程实现的，所以现在本模块只是对原生方法的简单封装。

首先，基于回调接口，增加了 `promisify` 接口。

其次，压缩选项参数 `options` 被简化为压缩等级参数 `level`；压缩占用内存等级 `memLevel` 为最高，其它选项值缺省。

API
---

```ts
type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

function gzipAsync  (data :Buffer | string, level :Level              ) :Promise<Buffer>;
function gzipSync   (data :Buffer | string, level :Level              ) :Buffer;
function gzip       (data :Buffer | string, level :Level, callback :Callback) :void;

function unzipAsync (data :Buffer                                     ) :Promise<Buffer>
function unzipSync  (data :Buffer                                     ) :Buffer;
function unzip      (data :Buffer,                        callback :Callback) :void;

type Callback = {
    (error :Error             ) :void
    (error :null, data :Buffer) :void
};
```
