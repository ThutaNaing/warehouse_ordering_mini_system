import { connect } from 'react-redux';

import TopTitleBarCom from '../../master_layout/TopTitleBarCom';
import { showMenu } from '../actions';

const mapStateToProps = state => {
    console.log("mapStateToProps");
    console.log(state);
    return {
        isClicked: state.menuBarReducer.isClicked
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        openActionFired: (isClicked)=> { dispatch(showMenu("Clicked!")) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopTitleBarCom)
