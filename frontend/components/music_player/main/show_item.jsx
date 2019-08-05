import React from 'react';
import { NavLink } from 'react-router-dom';


class ShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "playsongs"
        }
        this.note = this.note.bind(this);
        this.play = this.play.bind(this);
    }

    note() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "playsongs"
        })
    }

    play() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_white.png",
            noteClass: "play-show3"
        })
    }

    render() {
        let noteClass = this.state.noteClass;
        const song = this.props.song;
        // debugger;
        return(
        <div onMouseEnter={this.play} onMouseLeave={this.note} className={noteClass}>
            <div className="flex">
                <div>
                    <img id="art-note" src={this.state.noteIcon} />
                </div>
                <div className="song-info">
                    <li>{song.title}</li>
                    <div className="alb-art">
                            <li><span><NavLink to={`/albums/${song.album_id}`}>{song.album_title}</NavLink></span></li>
                            <li className="sep">•</li>
                            <li><span><NavLink to={`/artists/${song.artist_id}`}>{song.artist_name}</NavLink></span></li>
                    </div>
                </div>
            </div>

            <div>
                {song.duration}
            </div>

        </div>
        )
    }
}



export default ShowItem;