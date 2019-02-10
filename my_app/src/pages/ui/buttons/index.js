import React from 'react'
import { Card, Button } from 'antd'
import './button.less'

export default class Buttons extends React.Component {
  render () {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">IMooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button type="disabled">Imooc</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">IMooc</Button>
          <Button icon="edit">Imooc</Button>
          <Button icon="delete">Imooc</Button>
          <Button icon="search" shape="circle"></Button>
          <Button icon="download">Imooc</Button>
        </Card>
      </div>
    )
  }
}