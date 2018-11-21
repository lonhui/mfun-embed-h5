import React from 'react';
import { Row, Col,Spin, Alert } from 'antd';
import 'antd/dist/antd.css'
import './GameList.css';
import axios from 'axios';
import iconlv from '../../images/GameList/1@2x.png';
import right from '../../images/GameList/Right@32.png';

//userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值
var u = navigator.userAgent;
//Android终端
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
//iOS终端
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 

const screenHeight=window.screen.availHeight //当前屏幕高度
const screenWidth=window.screen.availWidth //当前屏幕宽度

class GameList extends React.Component{
    constructor(porps,context){
        super(porps,context);
        //设置当前页面title
        document.getElementsByTagName("title")[0].innerText = 'Game Center';
        this.state={
            list:[],
            pageSize:8,
            pageNum:1,//当前页码
            isend:false,//是否可滚动
            loading:true,
            total:10
        }
        this.getGameList()
    }

    onLoadPage(){
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop;

        let proLoadDis = 30;//预值

        if((scrollTop + clientHeight) >= scrollHeight - proLoadDis){
            this.setState({
                pageNum:++this.state.pageNum,
            })
            if(this.state.pageNum*this.state.pageSize<=this.state.total+this.state.pageSize){
                this.getGameList()
            }else{
                this.setState({
                    loading:false
                })
            }
        }
    }

    componentWillMount(){
        window.addEventListener('scroll',()=>this.onLoadPage())
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',()=>this.onLoadPage())
    }

    // 获取游戏列表
    getGameList(){
        axios.get('https://cmsapi.mfun.io/mfun/game/list?status='+1+'&pageSize='+this.state.pageSize+'&pageNum='+this.state.pageNum
        ).then((res)=>{
            let dataList=res.data.data.data
            for(let i=0;i<dataList.length;i++){
                if(dataList[i].desc && dataList[i].desc.length>50){
                    dataList[i].desc = dataList[i].desc.substring(0,50)+'...'
                }
            }
            this.setState({
                list:this.state.list.concat(res.data.data.data),
                total:res.data.data.total
            })
        })
    }
    

    render(){
        return(
            <div id="GameLiet" style={{height:screenHeight+'px'}}>
                <div className="head">
                    <div className="new-game">New Games</div>
                    <div className="more">More</div>
                </div>
                <div className="list">
                    {
                        this.state.list.map(function(item){
                            return (
                                <Row  className="game-list" key={item.id}>
                                    <Col span="5" className="game-img">
                                        <a href={isAndroid?item.google_link:isIOS?item.ios_link:'javascript:void(0);'}>
                                            <img src={item.icon} alt=""/>
                                        </a>
                                    </Col>
                                    <Col span="14" className="game-text">
                                        <div className="game-name">{item.name}</div>
                                        <div className="game-lv">
                                            {item.is_campaign>=1?<img src={iconlv} alt=""/>:''}
                                            {/* {item.lv>=1?<img src={iconlv} alt=""/>:''}
                                            {item.lv>=2?<img src={iconlv} alt=""/>:''}
                                            {item.lv>=3?<img src={iconlv} alt=""/>:''}
                                            {item.lv>=4?<img src={iconlv} alt=""/>:''}
                                            {item.lv>=5?<img src={iconlv} alt=""/>:''} */}
                                        </div>
                                        <a href={isAndroid?item.google_link:isIOS?item.ios_link:'javascript:void(0);'}>
                                            <div className="introduction">{item.desc}</div>
                                        </a>
                                    </Col>
                                    <Col  span="3" className="more-ico">
                                        <a href={isAndroid?item.google_link:isIOS?item.ios_link:'javascript:void(0);'}>
                                            <img src={right} alt=""/>
                                        </a>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>
                <div className={this.state.loading?"loading":"load"}>
                    {
                        this.state.loading?<Spin tip="Loading..."></Spin>:'In the end!'
                    }
                    
                </div>
            </div>
        )
    }
}

export default GameList;