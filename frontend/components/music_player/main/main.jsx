import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter, Link, NavLink } from 'react-router-dom';
import { logoutCurrentUser } from '../../../actions/session_actions';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';
import ArtistIndex from './artist_index';
import PlaylistIndex from './playlist_index'
import AlbumIndex from './album_index'
import PlaylistShow from './playlist_show'
import UserShow from './user_show'
import Search from '../main/search'
import LikesIndex from './likes_index'
class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
       let { currentUser } = this.props
       let navlinks;
       if (this.props.location.pathname !== '/search') {
           navlinks = 
           <ul className="browse-links">
               <li>
                   <div className="link-main">
                       <NavLink className="not-active" activeClassName="selected" to="/library/playlists">
                           PLAYLISTS
                            </NavLink>
                   </div>
               </li>

               <li>
                   <div className="link-main">
                       <NavLink className="not-active" activeClassName="selected" to="/library/albums">
                           ALBUMS
                        </NavLink>
                   </div>
               </li>
               <li>
                   <div className="link-main">
                       <NavLink className="not-active" activeClassName="selected" to="/library/artists">
                           ARTISTS
                        </NavLink>
                   </div>
               </li>
               <li>
                   <div className="link-main">
                       <NavLink className="not-active" activeClassName="selected" to="/library/likes">
                            LIKES
                        </NavLink>
                   </div>
               </li>
           </ul>
       } else {
           navlinks = <div></div>
       }

        return(
            <div className ="main-div">
                {navlinks}

                <ProtectedRoute exact path='/browse/featured' component={UserShow} />
                <ProtectedRoute exact path='/search' component={Search} />
                <ProtectedRoute exact path='/library/likes' component={LikesIndex} />
                <ProtectedRoute exact path='/library/artists' component={ArtistIndex} />
                <ProtectedRoute exact path='/library/playlists' component={PlaylistIndex} />
                <ProtectedRoute exact path='/library/albums' component={AlbumIndex} />
                {/* <PlaylistShow /> */}

            </div>
        )
    }
}

const msp = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id].username
    }
}

// const mdp = dispatch => {
//     return {
//         receive
//     }
// }

export default withRouter(connect(msp, null)(Main));