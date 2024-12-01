import { Col, Form, Input, InputNumber, Row } from 'antd'
import React from 'react'

function FormRatings() {
  return (
    <Row>
      <Col span={24}>
        <Form.Item label="Sotilgan" name='sold' rules={[{ required: true, message: 'maydon bosh' }]} >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Ko'rib chiqishlar soni" name='reviewCount' rules={[{ type: 'number', required: true, message: 'maydon bosh' }]} >
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label="Reyting" name='reting' rules={[{ type: 'number', required: true, message: 'maydon bosh' }]} >
          <InputNumber style={{ width: '100%' }} controls={false} />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default FormRatings