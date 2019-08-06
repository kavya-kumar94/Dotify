import React from 'react';
import { connect } from 'react-redux';
import { closeContextMenu } from '../../../actions/context_menu_actions';
import AddSongForm from './add_song_form'

class AddSongModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { contextMenu, closeContextMenu } = this.props;

        if (!contextMenu) {
            return null;
        }


        let component;

        switch (contextMenu) {
            case 'add-song':
                component = <AddSongForm />;
                break;
            default:
                return null;
        }


        return (
            <div className="add-song-bg" onClick={closeContextMenu}>
                <div className="add-song-dropdown" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

const msp = state => {
    return {
        contextMenu: state.ui.contextMenu
    };
};

const mdp = dispatch => {
    return {
        closeContextMenu: () => dispatch(closeContextMenu())
    };
};

export default connect(msp, mdp)(AddSongModal);