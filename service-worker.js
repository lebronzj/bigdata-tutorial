/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c2b1cb89bf15a2648dd08110e6a0c6d0"
  },
  {
    "url": "assets/css/0.styles.9b6772c9.css",
    "revision": "7690a297af4162c4e92a5c3dd5ea951c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b18536f5.js",
    "revision": "52fa4bd39ae77b38d60853f3689d8db0"
  },
  {
    "url": "assets/js/11.d45305ad.js",
    "revision": "f258091e32ab3e1d6add3a496de2ac5a"
  },
  {
    "url": "assets/js/12.f7ba974a.js",
    "revision": "c5a0018c97363a6ebaaedfcbeb41e435"
  },
  {
    "url": "assets/js/13.3fb367cb.js",
    "revision": "437652815355a498e4866f5364bc9016"
  },
  {
    "url": "assets/js/14.f9ba6e81.js",
    "revision": "4df8318853629c1e675f25b44fac4a8b"
  },
  {
    "url": "assets/js/15.92fa8d15.js",
    "revision": "b600e8462394de3cded30bf9e26edf32"
  },
  {
    "url": "assets/js/16.03a706f1.js",
    "revision": "cc18926a3480c6e4a6f023f15d5e1cb0"
  },
  {
    "url": "assets/js/17.4240ccc4.js",
    "revision": "027151b350e0c47ed5bbac2195a78575"
  },
  {
    "url": "assets/js/18.47724a3c.js",
    "revision": "48222fb1540a4e0e2a53933f0f6b6ec6"
  },
  {
    "url": "assets/js/19.893cd0e1.js",
    "revision": "8f5dc2c0799355c6e8eceb2ea31aa294"
  },
  {
    "url": "assets/js/20.0f9c85d2.js",
    "revision": "e17b1bc26d3c675c975da0b5f720c7ed"
  },
  {
    "url": "assets/js/21.acc7f149.js",
    "revision": "e90420ec83fcf396d2d0a9f838ce3b8f"
  },
  {
    "url": "assets/js/22.661a4c0a.js",
    "revision": "59934e0c7e9f45f8221fea8e37ad1214"
  },
  {
    "url": "assets/js/23.81ddc809.js",
    "revision": "13190468fdd42d3755a9e4abb0d8d9d0"
  },
  {
    "url": "assets/js/24.86cf02b7.js",
    "revision": "f682789917e3cd1b1ead6adf058b5223"
  },
  {
    "url": "assets/js/25.1a925ec5.js",
    "revision": "f17401ca7680bffec043d1db4ffa8643"
  },
  {
    "url": "assets/js/26.44a7e88b.js",
    "revision": "abf010b9523faee702014419feb6733c"
  },
  {
    "url": "assets/js/27.02160541.js",
    "revision": "e279eae924a2c994facabba0aad726f2"
  },
  {
    "url": "assets/js/28.f81d3aba.js",
    "revision": "66a8567ecd7c407007a33a7995fa66af"
  },
  {
    "url": "assets/js/29.e3c8d4f1.js",
    "revision": "b0925375f4409519c2b1f9fd924678ce"
  },
  {
    "url": "assets/js/30.dea331c0.js",
    "revision": "868fee64d8114ab509a856f0d60f6f6a"
  },
  {
    "url": "assets/js/31.3a150281.js",
    "revision": "91f4c7f33110bd2ba56fbdfe949ee073"
  },
  {
    "url": "assets/js/32.8d690ba0.js",
    "revision": "9306655e8cbe8f733f5cb3faa1faf93d"
  },
  {
    "url": "assets/js/33.1f32bcf1.js",
    "revision": "4204ce0ae6d089613b1afbd5c580f309"
  },
  {
    "url": "assets/js/34.45338a6d.js",
    "revision": "f467888ba224e93176269866b8eb820f"
  },
  {
    "url": "assets/js/35.e505a47e.js",
    "revision": "8374571d5b96f5d57f157495f333d341"
  },
  {
    "url": "assets/js/36.5751c2c9.js",
    "revision": "43f8d5269e07f9ad25b370ee30230b20"
  },
  {
    "url": "assets/js/37.1270bfe7.js",
    "revision": "5bcedb1822c1b3f5d16714f438c6b337"
  },
  {
    "url": "assets/js/38.3b5d01fa.js",
    "revision": "63ba67f1d13449f3a4782765dc8ce5a5"
  },
  {
    "url": "assets/js/39.f8cf867c.js",
    "revision": "1139b016ce48a517157ecf4ef60802f5"
  },
  {
    "url": "assets/js/4.6e5a58a7.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.9f18e62f.js",
    "revision": "42162dd7fedbb373113a4345ad5023ce"
  },
  {
    "url": "assets/js/41.10eace07.js",
    "revision": "251e7bb40fb36db45f12aab65e82c8d5"
  },
  {
    "url": "assets/js/42.fd96f2b1.js",
    "revision": "6923082f9dd472826a075a8cacd7b6f2"
  },
  {
    "url": "assets/js/43.d77fd497.js",
    "revision": "8a5fdd4218aad22c267179ad567fe268"
  },
  {
    "url": "assets/js/44.50436166.js",
    "revision": "6e1777cb34d1be62b1365976333437d4"
  },
  {
    "url": "assets/js/45.9f6de474.js",
    "revision": "9730d2315c10f7c9c677f3c3b1f93102"
  },
  {
    "url": "assets/js/46.65d98cbf.js",
    "revision": "1fad7deb75e00a217766d9a6c8a30e1c"
  },
  {
    "url": "assets/js/47.8c2d3205.js",
    "revision": "5da7bfc129e43771f7b0fe4b077438a2"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/6.dd9aa758.js",
    "revision": "c8cf86de62b64127a6a3020b757e7df4"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.83a9d945.js",
    "revision": "e7f57d0137afaaddca4c54eadf865f23"
  },
  {
    "url": "assets/js/9.c01c4b35.js",
    "revision": "7b7a80ce431b041e3bd4205ab80bdba7"
  },
  {
    "url": "assets/js/app.9e86c55f.js",
    "revision": "0fa88120af5aca7d91f736b178ae0c0a"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "bigdata-study.html",
    "revision": "26cc66b9f36b2e16721685a702e12247"
  },
  {
    "url": "flink/flink.html",
    "revision": "5b263e653392cc216d41be7ebf1f9a60"
  },
  {
    "url": "flume.html",
    "revision": "2b0347d5513421efc5677c1fcafcbbc1"
  },
  {
    "url": "hbase/hbase-api.html",
    "revision": "27c06228212f869b889ec43fb31ddacd"
  },
  {
    "url": "hbase/hbase-cli.html",
    "revision": "36b37342a37b631f6335eef268344159"
  },
  {
    "url": "hbase/hbase-ops.html",
    "revision": "1ab5b9be70d3aaec9a361fd562e651be"
  },
  {
    "url": "hbase/hbase-quickstart.html",
    "revision": "b88fd05fad3b606307e8a43ff42a970e"
  },
  {
    "url": "hbase/index.html",
    "revision": "1713a6e03a0d93b5a720f58cf181b0b2"
  },
  {
    "url": "hdfs/hdfs-java-api.html",
    "revision": "bf2fce7645b5f4cbffa378f4612b60db"
  },
  {
    "url": "hdfs/hdfs-ops.html",
    "revision": "6ceadc2bc57969d16627815a2b8965d3"
  },
  {
    "url": "hdfs/hdfs-quickstart.html",
    "revision": "991088473a9e92c0e6b3e61eb82543a9"
  },
  {
    "url": "hdfs/index.html",
    "revision": "4042ac52f1afde28d1be32277c9c3aac"
  },
  {
    "url": "hive/hive-ddl.html",
    "revision": "9f870897e1e800ea294502330bb5f54a"
  },
  {
    "url": "hive/hive-dml.html",
    "revision": "8d51ff8559c9a1f97bda6d04a1a9c062"
  },
  {
    "url": "hive/hive-index-and-view.html",
    "revision": "2d2ad6b9e2f3bdf2367c296b57276873"
  },
  {
    "url": "hive/hive-ops.html",
    "revision": "12e08063b5148f9bb2bd21cdb3ac7975"
  },
  {
    "url": "hive/hive-query.html",
    "revision": "6568acf60f23a75d5ce4571dfe2d1693"
  },
  {
    "url": "hive/hive-quickstart.html",
    "revision": "000c596d68d0d04c0b9f8f9e85e35fd8"
  },
  {
    "url": "hive/hive-table.html",
    "revision": "867dbf81aefcdb45f6f7d204d53fbaf6"
  },
  {
    "url": "hive/index.html",
    "revision": "0eb003aa93c33cd62d798ebd358fde3b"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "bd05fc3a43fd7c09cb901ae766244103"
  },
  {
    "url": "kafka/index.html",
    "revision": "f409034ededd5c5f9d33bd488674e163"
  },
  {
    "url": "kafka/kafka-cluster.html",
    "revision": "5e0748ba98682c4918c5a685d168f865"
  },
  {
    "url": "kafka/kafka-consumer.html",
    "revision": "231b06b2737c5bc133e7736e153cb1e7"
  },
  {
    "url": "kafka/kafka-ops.html",
    "revision": "c0ee48ff4fe9a116f67e717a7b5de723"
  },
  {
    "url": "kafka/kafka-producer.html",
    "revision": "b59cb9ac55277b7b683a5d8b00e49b80"
  },
  {
    "url": "kafka/kafka-quickstart.html",
    "revision": "ca8626ba344532865b6d4cd7da977eda"
  },
  {
    "url": "kafka/kafka-rebalance.html",
    "revision": "cca23b56ea2c30feca8339fbabe1c2b2"
  },
  {
    "url": "kafka/kafka-reliable-transmission.html",
    "revision": "e0763b734afc5480d26a7c27c2b82ebc"
  },
  {
    "url": "kafka/kafka-stream.html",
    "revision": "6e8613c2e8b26e4a0a2cfee1feaa26e0"
  },
  {
    "url": "mapreduce/mapreduce.html",
    "revision": "24ca3bd48101b761bcf9b80389bad669"
  },
  {
    "url": "overview.html",
    "revision": "50dba2992b370cf695cb35cb17e69929"
  },
  {
    "url": "spark.html",
    "revision": "19e8683f4c8173a420d02b3c337ce989"
  },
  {
    "url": "sqoop.html",
    "revision": "a031db6f25fb91352891eb4f0b63df67"
  },
  {
    "url": "yarn.html",
    "revision": "7abe7c310f46ef47d4d59869259a87ea"
  },
  {
    "url": "zookeeper/index.html",
    "revision": "69f797b262b6db59cc810a8334177e0f"
  },
  {
    "url": "zookeeper/zookeeper-api.html",
    "revision": "2254b9575c2563c75a326110338333f0"
  },
  {
    "url": "zookeeper/zookeeper-ops.html",
    "revision": "3d54be8c2bdc81607b3ed0a61609bc8d"
  },
  {
    "url": "zookeeper/zookeeper-quickstart.html",
    "revision": "a0dce432ddec4c73e68f7d6fcea1aff9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
