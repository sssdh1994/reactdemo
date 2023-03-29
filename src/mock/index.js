import Mock from "mockjs";

Mock.mock("/list", function () {
  return Mock.mock({
    code: 200,
    message: "",
    success: true,
    data: [
      {
        sellDate: "2023-03-01",
        sellName: "苹果",
        sellMoney: 6545,
        sellMount: 6324,
      },
      {
        sellDate: "2023-06-02",
        sellName: "香蕉",
        sellMoney: 7676,
        sellMount: 7643,
      },
      {
        sellDate: "2023-02-03",
        sellName: "橘子",
        sellMoney: 5345,
        sellMount: 7756,
      },
      {
        sellDate: "2023-09-02",
        sellName: "手机",
        sellMoney: 358674,
        sellMount: 35,
      },
      {
        sellDate: "2023-11-03",
        sellName: "西瓜",
        sellMoney: 4366,
        sellMount: 346,
      },
      {
        sellDate: "2023-01-02",
        sellName: "南瓜",
        sellMoney: 345,
        sellMount: 764,
      },
      {
        sellDate: "2023-12-03",
        sellName: "冬瓜",
        sellMoney: 6567,
        sellMount: 224,
      },{
        sellDate: "2023-09-02",
        sellName: "黄色",
        sellMoney: 358674,
        sellMount: 35,
      },
      {
        sellDate: "2023-11-03",
        sellName: "绿色",
        sellMoney: 4366,
        sellMount: 346,
      },
      {
        sellDate: "2023-01-02",
        sellName: "紫色",
        sellMoney: 345,
        sellMount: 764,
      },
      {
        sellDate: "2023-12-03",
        sellName: "黑色",
        sellMoney: 6567,
        sellMount: 224,
      },
    ],
  });
});
