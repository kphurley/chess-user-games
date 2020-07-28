import React from 'react';

import { Form, Input, Button } from 'antd';

export default ({
  formState,
  onFormChange,
  onSubmit
}) => (
  <Form
    layout='inline'
    style={{ display: "flex" }}
  >
    <Form.Item label="Username" style={{ flex: 1 }}>
      <Input
        placeholder="Enter your chess.com username here!"
        value={formState.user}
        onChange={e => onFormChange("user")(e)}
      />
    </Form.Item>
    <Form.Item label="Month">
      <Input
        placeholder="MM"
        value={formState.month}
        onChange={e => onFormChange("month")(e)}
      />
    </Form.Item>
    <Form.Item label="Year">
      <Input
        placeholder="YYYY"
        value={formState.year}
        onChange={e => onFormChange("year")(e)}
      />
    </Form.Item>
    <Form.Item>
      <Button
        onClick={onSubmit}
        type="primary"
      >
        Submit
      </Button>
    </Form.Item>
  </Form>
);
