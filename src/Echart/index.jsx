import * as echarts from "echarts";
import React, { useEffect} from "react";

const Echart = ({ dataSource }) => {
  useEffect(() => {
    const tempSellNameArr = dataSource.map((i) => i.sellName);
    const tempSellMountArr = dataSource.map((i) => i.sellMount);
    chartSet(tempSellNameArr, tempSellMountArr);
  }, [dataSource]);

  const chartSet = (sellNameArr, sellMountArr) => {
    const myChart = echarts.init(document.getElementById("main"));
    myChart.setOption({
      title: {
        text: "更改日期筛选已查看新的销售数据",
      },
      tooltip: {},
      xAxis: {
        data: sellNameArr,
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: sellMountArr,
        },
      ],
    });
  };
  return (
    <div
      id="main"
      style={{ width: "80%", margin: "0 auto", height: "300px" }}
    />
  );
};
export default Echart;
