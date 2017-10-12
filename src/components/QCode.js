import React, { Component } from 'react';
require('../js/qrcode1.js');



export default class QCode extends Component {
  constructor() {
    super();
    this.state = {
      path: null
    };
  }
  componentDidMount(){
    var qrcode = new QRCode(this.refs.Code, {
      width : 193,
      height : 193
    });
    this.setState({
      path:this.props.path
    })
    qrcode.makeCode(this.state.path);
    
  }
  render() {
    return (
      <div ref="Code">
        
      </div>
    )
  }
}