import React, { useState, useEffect } from "react";
import { Table, Pagination, Space, DatePicker, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Echart from "../Echart";
import "../mock/index.js";
import "./index.css";

import { returnColums } from "./constant";
import moment from "moment";
const { Header, Footer, Content } = Layout;

const { RangePicker } = DatePicker;

interface columnsProps {
  title: string;
  dataIndex: string;
  render?: any;
}
interface dataProps {
  sellDate: string;
  sellName: string;
  sellMoney: number;
  sellMount: number;
}

const TableDemo: React.FC = () => {
  const [dataSource, setDataSource] = useState([]);
  const [dateString, setDateString] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);
  useEffect(() => {
    if (dateString) {
      //筛选符合日期的数据
      const list = dataSource.filter((i: any) => {
        const isBefore = moment(dateString[0]).isBefore(i.sellDate);
        const isAfter = moment(dateString[1]).isAfter(i.sellDate);
        return isBefore && isAfter;
      });
      setDataSource(list);
    } else {
      getList();
    }
  }, [dateString]);

  const getList = () => {
    axios.get("/list").then(({ data }) => {
      setDataSource(data.data);
    });
  };
  const navigate = useNavigate();
  const pushRecord = (record: any) => {
    navigate("/detail", { state: record });
  };

  return (
    <Layout>
      <Header style={{ paddingInline: 0, backgroundColor: "#7dbcea" }}>
        <RangePicker
          className="mgl40"
          onChange={(v, dateString) => {
            setDateString(dateString);
          }}
        ></RangePicker>
      </Header>
      <Content>
        <Table
          className="mgl40"
          columns={returnColums(pushRecord)}
          dataSource={dataSource}
          pagination={{ showSizeChanger: true, pageSizeOptions: [5, 10] }}
        />
      </Content>
      <Footer>
        <Echart dataSource={dataSource} />
      </Footer>
    </Layout>
  );
};
export default TableDemo;
