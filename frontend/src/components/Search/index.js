import { connect } from "react-redux";
import { actionCreators as userActions } form "redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, props) => {
    const { user : { userList, imageList }, routing: { location }} = state;
    return {
        userList,
        imageList,
        location
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match : { params: {searchTerm } } } = ownProps;
    return {
        searchByTerm: () => {
            dispatch(userActions.searchByTerm(searchTerm));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);