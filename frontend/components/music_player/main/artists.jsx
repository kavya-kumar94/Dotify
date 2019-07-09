import React from 'react';
import { connect } from 'react-redux';

import { fetchArtists, fetchArtist } from '../../../actions/artist_actions';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {artists}
    }

    // componentDidMount() {
    //     this.props.fetchArtists();
    // }


    render() {

        // let { artists } =  {
        //         "1": {
        //             "name": "Drake",
        //             "id": 1
        //         },
        //         "2": {
        //             "name": "Majid Jordan",
        //             "id": 2
        //         },
        //         "3": {
        //             "name": "Michael Jackson",
        //             "id": 3
        //         },
        //         "4": {
        //             "name": "Travis Scott",
        //             "id": 4
        //         }
        //     }
        

        // if (artist.name === 'Drake') {
        //     imageUrl = "https://dotify-app-dev.s3-us-west-1.amazonaws.com/drake_album.jpg"
        // } else if (artist.name === 'Majid Jordan') {
        //     imageUrl = "https://dotify-app-dev.s3-us-west-1.amazonaws.com/majid.jpg"
        // } else if (artist.name === 'Travis Scott') {
        //     imageUrl = "https://dotify-app-dev.s3-us-west-1.amazonaws.com/travis.jpg"
        // } else {
        //     imageUrl = "https://dotify-app-dev.s3-us-west-1.amazonaws.com/mj.jpg"
        // }
        
        //     artists.map((artist, idx) => {
                return(
                    <div>

                    {/* <h1 className="artist-title">Artists</h1> */}
                    <ul className="artist-index">
                            <div className="img-crop">
                                <li>
                                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/majid.jpg"></img>
                                    <p>Majid Jordan</p>
                                </li>
                                <li>
                                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/drake_album.jpg"></img>

                                </li>
                                <li>

                                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/travis.jpg"></img>
                                </li>
                                <li>

                                    <img src="https://dotify-app-dev.s3-us-west-1.amazonaws.com/mj.jpg"></img>
                                </li>
                                <i className="far fa-play-circle"></i>
                            </div>
                            {/* <Link to={`/artists/${artist.id}`}><h2>{artist.name}</h2></Link> */}
                    </ul> 
                </div> )
            }
    }



            
    // const msp = state => ({
    //     artists: Object.values(state.entities.artists),
    // });

    // const mdp = dispatch => ({
    //     fetchArtists: () => dispatch(fetchArtists()),
    //     // fetchArtist: (id) => dispatch(fetchArtist(id))

    // });

    // export default connect(msp, mdp)(ArtistIndex);
    export default ArtistIndex;
