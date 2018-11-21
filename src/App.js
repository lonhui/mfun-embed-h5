import React, { Component } from 'react';
import MediaQuery from 'react-responsive';//移动端适配
import {HashRouter, Route, Switch} from 'react-router-dom';//路由
// ------页面------
import Invite from './pages/Invite/Invite'
import GameList from './pages/GameList/GameList'
// ----------------
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 当设备宽度小于1224px时显示内容 移动 */}
        <MediaQuery query='(max-device-width:1224px)'>
          <HashRouter>
            <Switch>
              <Route exact path="/invite" component={Invite}/>
              <Route exact path="/gameList" component={GameList}/>
            </Switch>
          </HashRouter>
        </MediaQuery>
        {/* 当设备宽度大于1224px时显示内容 PC */}
        <MediaQuery query='(min-device-width:1224px)'>
          请使用手机模式访问！
        </MediaQuery>
      </div>
    );
  }
}

export default App;
