import React, { Component } from 'react';

const googledown = require('../images/googledown.png');
const google = require('../images/google.png');
const weixin = require('../images/weixin.png');

class DownChrome extends Component{
    constructor() {
        super();
        this.state = {
            isHover : false
        }
        let down = {
            downChrome: {
                position: 'fixed',
                width: '80px',
                height: '106px',
                top: '50%',
                right: '20px',
                marginTop: '-48px',
                zIndex: '999999'
            },
            columnbox: {
                width: '100%',
                height: '100%',
                background: '#fff',
                borderRadius: '6px',
                textAlign: 'center',
                paddingTop: '15px',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative'
            },
            columnboxP: {
                lineHeight: '14px',
                fontSize: '12px',
                letterSpacing: '1px',
                color: '#999'
            }
        }
        
    };

    openKeFu() {
        doyoo.util.openChat('g=10075745');return false;
    }

    WeXinHover() {
        this.setState({
            isHover:true
        })
    }
    WeXinOut() {
        this.setState({
            isHover:false
        })
    }

    goTop() {
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
    
    render () {
        const isHover = this.state.isHover ? {display:'block'} : {display:'none'};
        return (
            <ul className="rightColumnbox">
                <li className="green">
                    <div className="columnbox weixin" onMouseOver={this.WeXinHover.bind(this)} onMouseOut={this.WeXinOut.bind(this)}>
                        <div className="column-img">
                            <img src="images/column_1.png" alt="" />
                        </div>
                        <p style={{marginTop:'10px'}}>官方微信</p>
                    </div>
                    <div className="columnbox-weixin" style={isHover} >
                        <img src={weixin} alt="" />
                    </div>
                </li>
                <li className="red">
                    <div className="columnbox" onClick={this.openKeFu.bind(this)}>
                        <div className="column-img">
                        <img src="images/column_3.png" alt="" />
                        </div>
                        <p style={{marginTop: '12px'}}>在线客服</p>
                    </div>
                </li>
                <li className="blue">
                    <a href="http://one2more.oss-cn-beijing.aliyuncs.com/Chrome61_Setup.exe" target="_blank">
                        <div className="columnbox" style={{height:'123px',overflow:'hidden',position:'relative'}}>
                            <img src="images/googledown.png" style={{position:'absolute',right:'0',top:'0'}} alt="" />
                            <div className="column-img">
                                <img src="images/google.png" alt="" />
                            </div>
                            <p style={{marginTop: '12px',color:'#999'}}>
                                上课<br />专用浏览器
                        </p>
                        </div>
                    </a>
                </li>
    
                <li className="grey">
                    <div className="columnbox" onClick={this.goTop.bind(this)}>
                        <div className="column-img">
                            <img src="images/column_4.png" alt="" />
                        </div>
                        <p>回到顶部</p>
                    </div>
                </li>
            </ul>
        )
    }
   
}

export default DownChrome;