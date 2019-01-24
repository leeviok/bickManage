import React from 'react'

export default class Child extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  componentWillMount () {
    console.log('WILL MOUNT')
  }

  componentDidMount () {
    console.log('DID MOUNT')
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
  }

  shouldComponentUpdate () {
    console.log('shouldUpdate')
    return true
  }

  componentWillUpdate () {
    console.log('WILL UPDATE')
  }

  componentDidUpdate () {
    console.log('DID UPDATE')
  }

  render () {
    return (
      <div>
        <div>{this.props.name}</div>
      </div>
    )
  }
}