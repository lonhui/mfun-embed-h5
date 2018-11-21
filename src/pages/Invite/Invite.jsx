import React from 'react';
import './Invite.css'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'

const screenWidth=window.screen.availWidth //当前屏幕宽度

class Invite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
        //设置当前页面title
        document.getElementsByTagName("title")[0].innerText = 'Ativity Rule';
    }

    getUid(){
        const url = window.location.href
        let uid = url.match(/[^a-zA-Z0-9]u{1,1}=([0-9]+)/)
        let did = url.match(/[^a-zA-Z0-9]c{1,1}=([a-z0-9]+)/)
        this.user.uid = uid[1]
        this.user.deviceId = did[1]
        if(this.user.uid == null || this.user.uid == 'null'){
            this.loginShow =true
        }else{
            this.getUserInfo()
        }
    }

    render(){
        return(
            <div id='Invite'>
                <div className="header">{/* 头部 */}
                    <div className="header-title">
                        <img src={require('../../images/Invite/activity rule@2x.png')} alt=''/>
                    </div>
                </div>
                <div className="content">{/* 内容区 */}
                    <div className="content-white-box">{/* 白色区 */}
                        <div className="content-pink-box">{/* 粉红区 */}
                            <div className="content-pink-box-text">
                                <div className="ul">
                                    <div className="li-1">
                                        <div className="dot"><img src={require("../../images/Invite/Dot@32.png")} alt=""/></div>
                                        <div>1. If your friend is successfully registered with your registration code on the registration page,your invitation will be valid.</div>
                                    </div>
                                    <div className="li-1">
                                        <div className="dot"><img src={require("../../images/Invite/Dot@32.png")} alt=""/></div>
                                        <div>2. For every successful invite to sign up for a friend</div>
                                    </div>
                                </div>
                                <div className="button">
                                    <div className="left-button">
                                        <p className="friend">your friend gets</p>
                                        <p><span>A</span> token award</p>
                                    </div>
                                    <div className="right-button">
                                        <p className="you">you get</p>
                                        <p><span>B</span> token award</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-centered">{/* 白色居中区 */}
                            <div className="h-1">
                                <div className="serial-number">1</div>
                                <div>How to invite friend</div>
                            </div>
                            <p className="content-centered-text text1">1. You can invite through facebook, Twitter, WeChat and so on. The steps are as follows:</p>
                            {/* 流程图 */}
                            <div className="invitation-process">
                                <div className="process-img">
                                    <img src={require("../../images/Invite/Group 4@2x.png")} alt=""/>
                                </div>
                                {/* <Row className="process-img">
                                    <Col span="4" className="me">
                                        <img src={require('../../images/Invite/Avatar@2x.png')} className="avatar" alt=""/>
                                        <p>me</p>
                                    </Col>
                                    <Col span="4" className="copy">
                                        <p>copy</p>
                                        <img src={require('../../images/Invite/arrow.png')} className="arrow" alt=""/>
                                    </Col>
                                    <Col span="7" className="code">
                                        <div>My Referral Code is 000000</div>
                                        <p>invitation code</p>
                                    </Col>
                                    <Col span="4" className="invite">
                                        <p>invite</p>
                                        <img src={require('../../images/Invite/arrow.png')} className="arrow" alt=""/>
                                    </Col>
                                    <Col span="4" className="friend">
                                        <img src={require('../../images/Invite/Avatar2@2x.png')} className="avatar" alt=""/>
                                        <p>my friend</p>
                                    </Col>
                                </Row> */}
                                <p className="process-text">Click invitation code on the referral code page, copy it 
successfully and send it to your friends. (introduce mfun to your friends after you send it. It is easier for you to invite a successful one.) </p>
                            </div>
                            <div className="h-2">
                                <div className="serial-number">2</div>
                                <div>How to sign up</div>
                            </div>
                            <p className="content-centered-text text1">1. Let your friends download mfun.</p>
                            <p className="content-centered-text">2. Just fill in your invitation code on the registration page and you can register successfully. </p>
                            <div className="img-input">
                                <img src={require("../../images/Invite/img-input box@2x.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Invite;