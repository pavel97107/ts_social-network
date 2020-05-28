import {connect} from 'react-redux'
import Dialogs from "./Dialogs";
import  {sendMessageAC,changeValueMessageAC} from '../../redux/dialogsReducer'


let mapStateToProps = (state: any) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        valueTextArea: state.dialogsPage.valueTextArea
    }
}


let DialogsContainer = connect(mapStateToProps, {sendMessageAC, changeValueMessageAC})(Dialogs)

export default  DialogsContainer;