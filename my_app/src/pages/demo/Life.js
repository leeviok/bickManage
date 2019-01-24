import React from 'react'
import Child from './Child'
import './index.less'
import {Button} from 'antd'
// import 'antd/dist/antd.css'

export default class Life extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handeAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <div>
        <div className="title">生命周期</div>
        <Button onClick={this.handeAdd} value="clickHere">antd按钮</Button>
        <input type="button" onClick={this.handeAdd} value="clickHere"/>
        <div>{this.state.count}</div>
        <Child name={this.state.count}></Child>
      </div>
    )
  }
}