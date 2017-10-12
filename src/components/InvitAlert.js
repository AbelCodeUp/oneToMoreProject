import React, { Component } from 'react';

class InvitAlert extends Component {
    constructor() {
        super();
    }

    render() {
        let { isShow, isShowFun } = this.props;
        let isBlock = isShow ? { display: 'block' } : { display: 'none' };
        return (
            <div className="YQMask" style={isBlock} >
                <div className="testTing" style={isBlock} >
                    <div className="wins w_center w_jifen_gz">
                        <div className="closeX" onClick={isShowFun}>
                            &times;
                </div>
                        <div className="w_jifen_head">
                            邀请好友奖励规则
                </div>
                        <div className="win_body" style={{ marginBottom: '20px' }}>
                            <ul className="guize">
                                <li>
                                    1、邀请朋友报名4课时套餐，赠送225积分+¥50元优惠劵（300积分可兑换1课时）；
                        </li>
                                <li>
                                    2、邀请朋友报名60课时套餐，赠送1125积分+¥50元优惠劵；
                        </li>
                                <li>
                                    3、邀请朋友报名60课时套餐，赠送1125积分+¥50元优惠劵；
                        </li>
                            </ul>
                            <ul className="guize" style={{ borderTop: '1px dotted #ddd', paddingTop: '30px' }}>
                                <li>
                                    可在hi翻外教课堂公众号“我的账户”查看积分及优惠劵奖励，并使用积分兑换课时。
                        </li>
                                <li>
                                    <a onClick={isShowFun} className="b_btn invt_btn" href="javascript:;" style={{ textIndent: '0', margin: '20px auto', display: 'block' }}>知道了</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default InvitAlert;