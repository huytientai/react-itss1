import React, { Component } from 'react';
import ReactJkMusicPlayer from "react-jinke-music-player";

class MusicPlayer extends Component {
    render() {
        return (
            <ReactJkMusicPlayer
                theme="light"
                preload={false}
                showMiniProcessBar={false}
                mode="full"
                toggleMode={false}
                once={false}
                showDownload={false}
                showReload={false}
                autoPlay={true}
                defaultPlayIndex={0}
                audioLists={this.props.songs_list}
            />
        )
    }
}

export default MusicPlayer;