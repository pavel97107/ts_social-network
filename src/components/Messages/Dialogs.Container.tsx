import {connect} from 'react-redux'
import Dialogs from "./Dialogs";
import {changeValueMessageAC, postInPosts, sendMessageAC} from '../../redux/dialogsReducer'
import {AppStateType} from "../../redux/redux-store";


export type MapStateToPropsType = {
    dialogsData: Array<postInPosts>,
    messagesData: Array<postInPosts>,
    valueTextArea: string
}
export type MapDispatchToPropsType = {
    sendMessageAC: () => void
    changeValueMessageAC: (value: string) => void

}

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        valueTextArea: state.dialogsPage.valueTextArea
    }
}


let DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {sendMessageAC, changeValueMessageAC})(Dialogs)

export default  DialogsContainer;