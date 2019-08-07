import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import NewPlaylistForm from './new_playlist_form'
import AddSongForm from '../music_player/main/add_song_form';
class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { modal, closeModal } = this.props;

        if (!modal) {
            return null;
        }


        let component;
        let classes;
        switch (modal) {
            case 'new-playlist':
                component = <NewPlaylistForm />;
                classes="modal-background";
                break;
            case 'add-song':
                component = <AddSongForm />;
                classes="add-song-bg";
                break;
            default:
                return null;
        }


        return (
            <div className={classes} onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

const msp = state => {
    return {
        modal: state.ui.modal
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);