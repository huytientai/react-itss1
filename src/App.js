import React, { Component } from 'react';
import './App.css';
import SongIcon from './SongIcon.js';

import Profile from './Profile.js';
import Search from './Search.js';
import ReactDOMServer from 'react-dom/server';
import NewsFeed from './NewsFeed.js';
import MusicPlayer from './MusicPlayer.js';

import { Menu } from 'antd';
import { NodeExpandOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          name: "Four Season",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Don't start now",
          singer: "Taeyeon",
          cover: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Four Wall",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Don't stop",
          singer: "Taeyeon",
          cover: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Kill this love",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Duyen Am",
          singer: "Taeyeon",
          cover: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Kill this love",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Duyen Am",
          singer: "Taeyeon",
          cover: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Four Wall",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Don't start now",
          singer: "Taeyeon",
          cover: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Kill this love",
          singer: "Taeyeon",
          cover: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
        {
          name: "Duyen Am",
          singer: "Taeyeon",
          cover: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
          musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        },
      ],
      feed: [
        {
          user: "some user name",
          usercontent: "All too well"
        },
        {
          user: "Taeyeon",
          usercontent: "こんにちは"
        },
        {
          user: "Bui Ngoc Tu",
          usercontent: "Look what you made me do"
        },
        {
          user: "Taylor Swift",
          usercontent: "Born this way"
        }
      ],
      playing: [],
      player: NaN,
    };
  }

  render_songs(searchData) {
    // console.log(this.state.songs);
    var array = searchData.filter(function (el){
      return el != null;
    });
    var songs = array.map((item, idx) =>
      <div className="App-grid-item">
        <SongIcon
          index={idx}
          name={item.name}
          singer={item.singer}
          cover={item.cover}
          description={item.description}
          onClick={() => this.play_song(idx, item)}
        />
      </div>
    );
   songs = <div className="App-grid-container">{songs}</div>; 
    return songs;
  }

  play_song(index, item) {
    // var arr = this.state.playing;
    var arr = [];
    arr.push(item);
    arr.push(item);
    arr.push(item);
    arr.push(item);
    // console.log(arr);
    this.setState({
      playing: arr,
    });
    // console.log(this.state.playing);
  }

  render_feed() {
    var feeds = this.state.feed.map((item, idx) =>
      <div>
        <NewsFeed
          index={idx}
          username={item.user}
          usercontent={item.usercontent}

        // onClick={() => this.play_song(idx)}
        />
      </div>
    );
    feeds = <div >{feeds}</div>;
    return feeds;
  }

  searchCallback= (searchData)=>{
    {/*this.setState({row1:this.render_songs(searchData)});
     this.state.row1=this.render_songs(searchData);
      
      console.log(this.state.row1);*/}
      document.getElementById('row1').innerHTML=ReactDOMServer.renderToString(this.render_songs(searchData));

  };

  render() {
    var row1 = this.render_songs(this.state.songs);
    
    var renderfeeds = this.render_feed();

    return (
      <div className="App">
        <div className="App-profile">
          <Profile />
        </div>

        
        <div className="App-grid-container" style={{width: 250}}>
          <Search songs={this.state.songs} callbackFromParent={this.searchCallback}/>
        </div>
        
        <div id="row1">{row1}</div>

        <Menu className="Feeds-grid-container"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['defaultMenu']}
          mode="inline"
        >
          <SubMenu
            key="defaultMenu"
            title={
              <span>Newsfeed</span>
            }
          >
            {renderfeeds}
          </SubMenu>
        </Menu>
        {row1}
        <br></br><br></br><br></br><br></br>
        <MusicPlayer
          songs_list={this.state.playing}
        />
      </div>
    );
  }
}


export default App;
