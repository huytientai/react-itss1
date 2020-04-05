import React, { Component } from 'react';
import './App.css';
import SongIcon from './SongIcon.js';
import Profile from './Profile.js';
import Search from './Search.js';
import ReactDOMServer from 'react-dom/server'


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          name: "Four Season",
          image: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
          like_status: false,
        },
        {
          name: "Don't start nowe",
          image: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
          like_status: false,
        },
        {
          name: "Four Season",
          image: "https://avatar-nct.nixcdn.com/song/2019/03/24/9/3/e/d/1553436192079_640.jpg",
          description: "The Korean's Beyonce returns!!!!",
          like_status: false,
        },
        {
          name: "Don't start nowe",
          image: "https://xonefm.com/wp-content/uploads/2019/11/EHo4IkgX0AAiv2z-1024x1024.jpg",
          description: "Dua Lipa's new ablum. Party all night long",
          like_status: false,
        },
        {
          name: "Kill this love",
          image: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
          like_status: false,
        },
        {
          name: "Duyen Am",
          image: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
          like_status: false,
        },
        {
          name: "Kill this love",
          image: "https://avatar-nct.nixcdn.com/playlist/2017/08/29/6/8/4/e/1503941624343_500.jpg",
          description: "BLACKPINK IN YOUR AREA. Newest single",
          like_status: false,
        },
        {
          name: "Duyen Am",
          image: "https://media.ex-cdn.com/EXP/media.homeaz.vn/files/content/2019/10/23/tf8tj-so-15715778039661027443493-1108.jpeg",
          description: "Vietnamese top chart single.",
          like_status: false,
        },
      ]
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
          image={item.image}
          description={item.description}
          like_status={item.like_status}
          callbackFromParent={this.SongIconCallback}
          onClick={() => this.play_song(idx)}
        />
      </div>
    );
   songs = <div className="App-grid-container">{songs}</div>; 
    return songs;
  }

  play_song(index) {
    console.log('Play song: ', index);
  }

  search_callback= (searchData)=>{
    {/*this.setState({row1:this.render_songs(searchData)});
     this.state.row1=this.render_songs(searchData);
      
      console.log(this.state.row1);*/}
      document.getElementById('row1').innerHTML=ReactDOMServer.renderToString(this.render_songs(searchData));
     
  };

  SongIconCallback= (songData) => {
    let songs=this.state.songs;
    songs[songData[0]].like_status = songData[1];
    this.setState({songs});
  }

  render() {
     var row1 = this.render_songs(this.state.songs);

    return (
      <div className="App">
        <div className="App-profile">
          <Profile />
        </div>
        
        <div className="App-grid-container" style={{width: 250}}>
          <Search songs={this.state.songs} callbackFromParent={this.search_callback}/>
        </div>
        
        <div id="row1">{row1}</div>

      </div>
    );
  }
}


export default App;
