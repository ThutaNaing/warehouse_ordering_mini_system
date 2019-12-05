import { connect } from 'react-redux'
import MainCom from '../../master_layout/MainCom'

import { showMenu } from '../actions'

const mapStateToProps = state => {
    console.log("mapStateToProps");
    console.log(state);
    return {
        isClicked: state.menuBarReducer.isClicked
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
        isClickActionFired: (isClicked)=> { dispatch(showMenu("Clicked!")) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCom)