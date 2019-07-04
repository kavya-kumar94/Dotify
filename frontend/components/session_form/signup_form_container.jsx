import { connect } from 'react-redux';
import { signup, receiveErrors, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        currentUser: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        clearErrors: () => dispatch(clearErrors()),
        loginDemo: () => dispatch(loginDemo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);