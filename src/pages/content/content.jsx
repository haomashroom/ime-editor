/**
 * Created by mashroom on 6/7/2018.
 */
import React, { Component } from 'react';
import {injectIntl} from 'react-intl';
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import { connect } from 'react-redux'
import { Button} from 'antd';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    changeLang = ()=>{

    }
    componentDidMount() {

    }
    render() {
        const {text} = this.props;
        return (
            <div>
                {text}
            </div>

        )
    }
}
//映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log("state",state);
    return {
        text:state.home.name ,
        // num:state.currentDocInfo.num,
    }
}
//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch){
    return{
        onButtonClick:()=> {
            dispatch({
                type:'SAVEFORMDATA',
                value:"小涛改的"
            })
        },
        // onChangeText:()=>dispatch(changeTextAction),
        // addClick:()=>{
        //     dispatch(addClickAction)
        // },
        // getTextClick:(text)=>{
        //     dispatch(getTextAction(text))
        // }
    }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Content), {withRef: true});