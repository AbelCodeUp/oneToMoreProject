import React, { Component } from 'react';
import { Link } from 'react-router';
require('../js/qrcode1.js');
import copy from 'copy-to-clipboard';
import InvitAlert from './InvitAlert';


const title = require('../images/my-invitation.png');

export default class Invitation extends React.Component {
    constructor() {
        super();
        this.state = {
            InvitationUrl:'',
            isShowGz: false
        }
    }

    copyUrl() {
        alert('复制成功')
        copy(this.state.InvitationUrl, {
            debug: true,
            message: '复制成功',
        });
        message.success('复制成功，如果失败，请在输入框内手动复制.');
        
    }

    openGuizhi(){
        this.setState({
            isShowGz: true
        })
    }

    componentDidMount() {
        
        var qrcode = new QRCode(this.refs.Code, {
            width : 193,
            height : 193
          });
          
        fetch(GetStudentInfo,//获取个人信息
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                    , Authorization: window.localStorage.getItem('Tonken')
                },
            })
            .then(res => res.json())
            .then(json => {
                
                if(json.result == 1){
                    
                    this.setState({
                        InvitationUrl:`http://wx.gogo-talk.com#/My_invitation/${json.data.StudentId}`  
                    });
                    qrcode.makeCode('http://wx.gogo-talk.com/#/My_invitation/'+json.data.Mobile);
                }
               
            })       
    }
    isShowFun() {
        this.setState({
            isShowGz : false
        })
    }
    
    render() {
       
        return (
            <div className="b_panel"  style={{overflow:'hidden',minHeight:'900px'}}>
                <InvitAlert isShow={this.state.isShowGz} isShowFun={this.isShowFun.bind(this)}/>
                <div className="Invit-box" >
                    <div className="Invit-title">
                        <img src={title} />
                    </div>
                    <h4 className="Invit-head">
                        hi翻外教课堂 <br/>
                        欢乐课堂 结伴同享
                    </h4>   
                    <div className="Invit-desc">
                        优质外教 丨 3-12周岁 丨 一对六精品小班
                    </div> 
                    <div className="Invit-code" ref="Code">
                    </div>
                    <p className="Invit-footer">
                        免费领取课时<br/>
                        客服电话：400-6767-671
                    </p>
                </div>
                <div className="Invit-right">
                    <p className="Invit-r-url" ref="InvUrl">{this.state.InvitationUrl}</p>
                    <a href="javascript:;" className="copyBtn" onClick={this.copyUrl.bind(this)}>
                        复制链接发给好友
                    </a>
                    <div className="lookgz" onClick={()=>this.openGuizhi()}>
                        查看邀请好友奖励规则
                    </div>
                </div>
            </div>
        )
    }
}
