import * as React from 'react'
import { Component } from 'react'

export interface IProps {
  /** value description */
  value: string
  /** disabled description */
  disabled: boolean
}

export default class TextField extends Component<IProps, {}> {
  render () {
    const {
      value,
      disabled
    } = this.props
    return (<input
      value={value}
      disabled={disabled}
    />)
  }
}
