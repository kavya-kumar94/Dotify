import React from 'react';



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
        return(
        <div onMouseEnter={this.play} onMouseLeave={this.note} className={noteClass}>
            <div className="flex">
                <div>
                    <img id="art-note" src={this.state.noteIcon} />
                </div>
                <li>
                    {song.title}
                </li>
                <li>
                    {song.album}
                </li>
                <li>
                    {song.artist}
                </li>
            </div>

            <div>
                {song.duration}
            </div>

        </div>
        )
    }
}



export default ShowItem;