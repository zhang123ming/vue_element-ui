import Mock from "mockjs"
export default {
  getTabData: () => {
    return {
      code: 200,
      getTabData: [{
          name: "今日支付订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "今日收藏订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "star-off",
          color: "#ffb980"
        },
        {
          name: "今日未支付订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "goods",
          color: "#5ab1ef"
        },
        {
          name: "本月支付订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "success",
          color: "#2ec7c9"
        },
        {
          name: "本月收藏订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "star-off",
          color: "#ffb980"
        },
        {
          name: "本月未支付订单",
          number: Mock.Random.float(1000, 10000, 0, 2),
          icon: "goods",
          color: "#5ab1ef"
        }
      ]
    }
  },
  getHomeData: () => {
    return {
      code: 200,
      data: {
        videoData: [{
            name: 'SpringBoot',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'Java',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'HTML',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'CSS',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'VUE',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'Bootstrap',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: 'React',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'Node.js',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'Javascript',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'Jquery',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          }, {
            name: 'mySql',
            bugTody: Mock.Random.float(1000, 10000, 0, 2),
            bugMonth: Mock.Random.float(1000, 10000, 0, 2),
            buyCount: Mock.Random.float(1000, 10000, 0, 2),
          },
        ]
      }
    }
  },
  getCartGoods: () => {
    return {
      data: {
        "success_code": 200,
        "message": [{
          "id": 1,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-05/46755fdf-38a7-457b-86b5-e8a4c7a7c569.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【去不了退款】撕拉面膜中药美白祛斑收缩毛孔去黑头粉刺清洁角",
          "tui": "满20返2",
          "fan": "满20返2",
          "price": 12.3,
          "ok": "23",
          "tou1": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 2,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-17/4a7b7cc4000c25cf6e01d34467dd67e4.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【尊享礼盒】正品24K黄金护肤品套装补水保湿美白祛斑化妆品女",
          "tui": "退货包运费",
          "fan": "退货包运费",
          "price": 45.7,
          "ok": "567",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 3,
          "img": "//t00img.yangkeduo.com/goods/images/2019-03-14/7e81f166806dfc34e81e5fb538350cbe.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "胶原蛋白免洗睡眠面膜美白保湿祛黄收缩毛孔祛抗皱提拉紧致肌肤",
          "tui": "极速退款",
          "fan": "退货包运费",
          "price": 45.9,
          "ok": "568",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 4,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-19/febcddd8b46bc4b82df59fac29386683.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "夏天眉笔 超防水】格蒙眉笔防水防汗不脱色自然持久一字眉初学者",
          "tui": "极速退款",
          "fan": "退货包运费",
          "price": 34.6,
          "ok": "456",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 5,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-23/6eb79d3bafdab4b0b9b590fe6c5e0b71.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "抖音网红同款CC棒美白遮瑕防水不脱妆气垫BB霜CC霜化妆品粉底液",
          "tui": "退货包运费",
          "fan": "满20返2",
          "price": 67.9,
          "ok": "789",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/44f6c1e4862c9dc0b31ff7ffaff842de9c0d33c3-1554509132?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 6,
          "img": "//t00img.yangkeduo.com/goods/images/2018-11-18/35f24ad0626bde85d0d4c3a8332b57d3.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "30片正品美白祛斑面膜贴美白补水保湿淡斑去祛痘学生孕妇男女产品",
          "tui": "满20返2",
          "fan": "极速退款",
          "price": 45.7,
          "ok": "345",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/44f6c1e4862c9dc0b31ff7ffaff842de9c0d33c3-1554509132?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 7,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-19/a0158dcbab5eee00223393bd98da6011.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【专柜正品 精装礼盒6件套】韩美肌墨菊补水护肤套装保湿美白淡斑",
          "tui": "满20返2",
          "fan": "满20返2",
          "price": 12.5,
          "ok": "345",
          "tou1": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 8,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-15/95622b97b5c5919d0e2a2383c20a57fd.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "李佳琦推荐男友看不出伪素颜内眼线胶笔防水防汗不晕染初学者棕色",
          "tui": "退货包运费",
          "fan": "满20返2",
          "price": 34.7,
          "ok": "234",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 9,
          "img": "//t00img.yangkeduo.com/goods/images/2019-04-26/b18544a0951729010828737663e541a5.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【抢40片】一枝春玻尿酸面膜美白补水保湿祛斑化妆品正品15-40片",
          "tui": "满20返2",
          "fan": "满20返2",
          "price": 56.6,
          "ok": "123",
          "tou1": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 10,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-01/22702888-43fa-4a2a-954c-758c866235d1.jpg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "100%享瘦(8-40)斤瘦身神器懒人肚脐贴瘦腿腰肚子脸男女通用产品",
          "tui": "退货包运费",
          "fan": "满20返2",
          "price": 21.1,
          "ok": "12",
          "tou1": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 11,
          "img": "//t00img.yangkeduo.com/goods/images/2018-10-19/c4cc4aff583102cbb63bea1601ea60e4.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "正品cc棒遮瑕自然不脱妆防水气垫bb霜cc霜保湿提亮肤色粉底液膏",
          "tui": "满20返2",
          "fan": "极速退款",
          "price": 345.7,
          "ok": "234",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 12,
          "img": "//t00img.yangkeduo.com/goods/images/2019-04-07/b432ec600952c1d931dcc4959877a317.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "芦荟海藻面膜美白祛斑补水保湿收缩毛孔祛痘淡化痘印正品学生男女",
          "tui": "退货包运费",
          "fan": "满20返2",
          "price": 34.2,
          "ok": "45",
          "tou1": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 13,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-05/fd1be773dbbdff0c76fff27f19dbb33b.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【不拔甲无痛苦】中药外用治甲沟炎药嵌甲矫正贴肉芽消红肿化脓",
          "tui": "极速退款",
          "fan": "退货包运费",
          "price": 12.34,
          "ok": "678",
          "tou1": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 14,
          "img": "//t00img.yangkeduo.com/goods/images/2019-04-16/7f72880cb1a332d2a2c73a2d12d3c623.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "抖音网红小蘑菇头气垫bb霜cc棒遮瑕防水不脱妆美白保湿粉底液正品",
          "tui": "极速退款",
          "fan": "满20返2",
          "price": 45.7,
          "ok": "124",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 15,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-10/c0ce2cac70c5cd0ab5f189f18206f622.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【有防伪】百雀羚套装护肤品精粹洗面奶补水保湿美白化妆品套装女",
          "tui": "满20返2",
          "fan": "极速退款",
          "price": 54.6,
          "ok": "789",
          "tou1": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 16,
          "img": "//t00img.yangkeduo.com/goods/images/2018-12-05/f965fa414d6264aa8982dc3a4a309fd6.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "1000ml盖白发彩色染发剂永久亚麻色",
          "tui": "满20返2",
          "fan": "极速退款",
          "price": 45.4,
          "ok": "567",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 17,
          "img": "//omsproductionimg.yangkeduo.com/images/2017-11-16/d62741b218bbdb1a580cadfd3d591031.jpeg@400w_1l_70Q_50sh.webp",
          "title": "新款八杯水护肤品套装补水保湿亮白滋润去黄气女士学生化妆品正品",
          "tui": "极速退款",
          "fan": "退货包运费",
          "price": 7.4,
          "ok": "45",
          "tou1": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 18,
          "img": "//t00img.yangkeduo.com/goods/images/2019-06-11/fa9bfd8618b1fbab05716007ae5cd1c7.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【买二送一】搞定皮肤天生黑暗黄晒黑全身嫩白男女通用脸部沐浴露",
          "tui": "极速退款",
          "fan": "极速退款",
          "price": 56.9,
          "ok": "2345",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 19,
          "img": "//t00img.yangkeduo.com/goods/images/2019-04-28/a6a022a8c011c1fe6c76945b960f19db.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "快手网红同款悠纪玻尿酸原液烟酰胺安瓶精华水补水保湿舒缓精华水",
          "tui": "极速退款",
          "fan": "满20返2",
          "price": 78.5,
          "ok": "234",
          "tou1": "//t20img.yangkeduo.com/a/2e752b9dcc8fe755abdc807a856dc59824bee8ea-1556854458?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 20,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-06/78559d08d62b7000095e819999b12c02.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "【七天淡化黑眼圈眼袋皱纹】伶尔黄金贵妇海藻眼膜正品眼霜60片盒",
          "tui": "退货包运费",
          "fan": "满20返2",
          "price": 56.2,
          "ok": "789",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/44f6c1e4862c9dc0b31ff7ffaff842de9c0d33c3-1554509132?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp"
        }, {
          "id": 21,
          "img": "//t00img.yangkeduo.com/goods/images/2019-02-21/2af2e1bed24ddd9683a9fd8a819a6f2a.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "超值四瓶装指甲油套装免烤微胶持久防水不可撕拉速干美甲指甲油",
          "tui": "极速退款",
          "fan": "满20返2",
          "price": 78.3,
          "ok": "678",
          "tou1": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp",
          "tou2": "//t21img.yangkeduo.com/a/632548b4b8c78b999e946033168124805eb9e109-1526774483?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }, {
          "id": 22,
          "img": "//t00img.yangkeduo.com/goods/images/2019-05-27/91c6b35a195922cef3e0b55cfc945dd1.jpeg?imageMogr2/sharpen/1%7CimageView2/2/w/400/q/70/format/webp",
          "title": "韩纪小鸡蛋护肤品6件套补水保湿淡斑化妆品套装正品控油收缩毛孔",
          "tui": "满20返2",
          "fan": "极速退款",
          "price": 23.6,
          "ok": "674",
          "tou1": "//t20img.yangkeduo.com/a/a147c1094f238dd1789baa4227bae0c3a876502a-1541385395?imageMogr2/sharpen/1%7CimageView2/2/w/74/q/70/format/webp",
          "tou2": "//t20img.yangkeduo.com/a/cb2b44d36df58176588f7871eeec2b363cb1ae44-1560571549?imageMogr2/sharpen/1%7CimageView2/2/w/1300/q/70/format/webp"
        }]
      }

    }
  }
}
