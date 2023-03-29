import React from "react";
import { Space } from "antd";

const returnColums = (pushRecord) => {
  return [
    {
      title: "sellName",
      dataIndex: "sellName",
    },
    {
      title: "sellDate",
      dataIndex: "sellDate",
    },
    {
      title: "sellMoney",
      dataIndex: "sellMoney",
      sorter: (a, b) => a.sellMoney - b.sellMoney,
    },
    {
      title: "sellMount",
      dataIndex: "sellMount",
      sorter: (a, b) => a.sellMount - b.sellMount,
    },
    {
      title: "action",
      dataIndex: "action",

      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => pushRecord(record)}>详情</a>
        </Space>
      ),
    },
  ];
};

export { returnColums };
