import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  Button,
  Modal,
  DatePicker,
  InputNumber,
  Form,
  Input,
  Space,
} from "antd";

const Detail: React.FC = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const tempV = useMemo(() => {
    return {
      ...state.state,
      sellDate: dayjs(state.state.sellDate),
    };
  }, [state]);
  const [value, setValue] = useState(tempV);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    //解决日期返回数据是一个moment类型
    if (value?.sellDate && typeof value?.sellDate !== "string") {
      setValue((prev: any) => ({
        ...prev,
        sellDate: dayjs(prev.sellDate).format("YYYY-MM-DD"),
      }));
    }
  }, [value?.sellDate]);
  const onFinish = (values: any) => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, marginTop: "50px" }}
      initialValues={value}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="sellName"
        name="sellName"
        rules={[{ required: true, message: "Please input your sellName!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="sellMoney"
        name="sellMoney"
        rules={[{ required: true, message: "Please input your sellMoney!" }]}
      >
        <InputNumber min={0.01} step="0.01" />
      </Form.Item>
      <Form.Item
        label="sellMount"
        name="sellMount"
        rules={[{ required: true, message: "Please input your sellMount!" }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        label="sellDate"
        name="sellDate"
        rules={[{ required: true, message: "Please input your sellDate!" }]}
      >
        <DatePicker
          format={"YYYY-MM-DD"}
          mode={"date"}
          onChange={(date, dateString) => {
            setValue((prev: any) => ({
              ...prev,
              sellDate: dateString,
            }));
          }}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            返回
          </Button>
        </Space>
      </Form.Item>
      <Modal title="数据展示" open={visible} onOk={close} onCancel={close}>
        {JSON.stringify(value)}
      </Modal>
    </Form>
  );
};
export default Detail;
