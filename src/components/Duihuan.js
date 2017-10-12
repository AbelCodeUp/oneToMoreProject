// require('../js/jquery.min.js')
require('../js/qrcode1.js');
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
//import $ from 'jquery';
const bg = require('../images/duihuanbg3.png')


export default class Duihuan extends React.Component {
    constructor() {
        super();
        this.state = {
            code: ''
        }
    }
    componentDidMount() {
        // var qrcode = new QRCode(document.getElementById("qrcode"), {
        //     width : 100,
        //     height : 100
        // });

        // function makeCode () {		
        //     var elText = document.getElementById("text");

        //     if (!elText.value) {
        //         alert("Input a text");
        //         elText.focus();
        //         return;
        //     }

        //     qrcode.makeCode(elText.value);
        // }

        // makeCode();
    }
    duihuanFn() {
        if (this.state.code != '') {


            fetch(ExchangeClass + `?CarNumber=${this.state.code}`,//获取个人信息
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                        , Authorization: window.localStorage.getItem('Tonken')
                    },
                })
                .then(res => res.json())
                .then(json => {

                    if (json.result == 1) {
                        console.log(json);
                        this.refs.yuketip.style.display = 'block';

                        this.setState({
                            code: ''
                        })
                        this.refs.tishi.innerHTML = '兑换成功';

                    } else {
                        this.refs.yuketip.style.display = 'block';
                        this.setState({
                            code: ''
                        })
                        this.refs.tishi.innerHTML = json.msg;
                    }
                    setTimeout(function () {
                        this.refs.yuketip.style.display = 'none';
                    }.bind(this), 2000)

                })
        } else {
            this.refs.yuketip.style.display = 'block';

            this.refs.tishi.innerHTML = '请填写兑换码';
            setTimeout(function () {
                this.refs.yuketip.style.display = 'none';
            }.bind(this), 2000)
        }


    }
    render() {
        return (
            <div>
                {/* <input id="text" type="text" value={"http://jindo.dev.naver.com/collie"} style={{width:'80%'}}/>
                <div id="qrcode" ref='qrcode2' style={{width:'100px', height:'100px', marginTop:'15px',border:'1px solid red'}}></div> */}
                <div className='duhuanbox'>
                    <div className='duhuantitle'>
                        <img src={bg} />
                    </div>
                    <div className='duihuanxin'>
                        <input className='duihuaninput' value={this.state.code} ref='codeText' type='text' onChange={(e) => this.setState({ code: e.target.value })} placeholder='输入兑换码' />
                        <div className='duihuanbtn' onClick={this.duihuanFn.bind(this)}>点击兑换</div>
                    </div>
                    <div className='jihuotishibox'>
                        <div className='jihuotishi'>
                            <h2>激活提示</h2>
                            <p>1、兑换码兑换成功后，赠送4课时+50元优惠劵（优惠劵有效期30天）</p>
                            <p>2、如您已报名 ¥99元套餐，无法再次兑换</p>
                            <p>3、点击【我的课时】，查看赠送课时</p>
                            <p>4、点击【我的优惠劵】，查看赠送后的优惠劵</p>
                            <p>5、课程有效期至2017-10-15，过期获赠课时失效，请及时约课</p >
                            <p>6、如有疑问请扫描微信公众号或拨打 400-6767-671 联系客服咨询</p>
                        </div>
                    </div>
                </div>
                <div className="yy_mengtai" ref="yuketip">
                    <div className="yy_mengtai3" style={{ display: 'block' }}>
                        <div className="yy" style={{ textAlign: 'center', lineHeight: '30px', height: '100px', paddingTop: '39px' }}>
                            <h5 ref='tishi'>预约成功</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}