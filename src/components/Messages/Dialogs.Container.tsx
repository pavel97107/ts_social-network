import {connect} from 'react-redux'
import Dialogs from "./Dialogs";
import {changeValueMessageAC, sendMessageAC} from '../../redux/dialogsReducer'
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: any) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        valueTextArea: state.dialogsPage.valueTextArea
    }
}


let DialogsContainer = connect(mapStateToProps, {sendMessageAC, changeValueMessageAC})(Dialogs)

export default  DialogsContainer;