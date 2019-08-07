import React from 'react';
import { NavLink } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux'


class ArtistShowItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "art-song",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/handtinytrans.gif",

        }
        this.note = this.note.bind(this);
        this.play = this.play.bind(this);
    }

    note() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png",
            noteClass: "art-song",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/handtinytrans.gif"

        })
    }

    play() {
        this.setState({
            noteIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/play_white.png",
            noteClass: "art-song2",
            addIcon: "https://dotify-app-dev.s3-us-west-1.amazonaws.com/3dots.png"

        })
    }

    render() {
        // <div className="art-song">
        //     <div className="parent">
        //         <div className="track5">
        //             <img id="art-note" src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/music_note.png" />
        //             <li id="song-title">{song.title}</li>
        //         </div>
        //         {/* </div> */}
        //         {/* <div className="stitle"> */}
        //         {/* </div> */}
        //         {/* <div id="duration"> */}
        //         <div>
        //             <li>{song.duration}</li>
        //         </div>


        //     </div>
        // </div>


        let noteClass = this.state.noteClass;
        const song = this.props.song;
        let { openModal } = this.props

        // debugger;
        return (
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

                <div className="add-duration">
                    <img onClick={() => openModal("add-song")} id="add-song-menu" src={this.state.addIcon} />
                    {song.duration}
                </div>

            </div>
        )
    }
}

const mdp = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}


export default connect(null, mdp)(ArtistShowItem);