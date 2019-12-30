// import { connect } from 'react-redux';

// import LeftMenuCom from '../../master_layout/LeftMenuCom';
// import { showMenu, hideMenu } from '../actions';

// const mapStateToProps = state => {
//     console.log("mapStateToProps");
//     console.log(state);
//     return {
//         isClicked: state.menuBarReducer.isClicked
//     };
// }
  
// const mapDispatchToProps = dispatch => {
//     return {
//         openActionFired: (isClicked)=> { dispatch(showMenu("Clicked!")) },
//         closeActionFired: ()=> { dispatch(hideMenu("UnClicked!")) }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuCom)