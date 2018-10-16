// import {bindActionCreators} from "redux"
// import {connect} from "react-redux"
// import * as actionCreators from "../actions/actionCreators"
//
// import Main from "./Main"
//
// function mapStateToProps(state) {
//     return {
//         posts:state.posts,
//         comments:state.comments
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionCreators , dispatch)
//
// }
//
// const App = connect(mapStateToProps,mapDispatchToProps)(Main)
//
// export default App


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
