/**
 * Created by mashroom on 6/7/2018.
 */
import React, { Component } from 'react';
import {injectIntl} from 'react-intl';
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';
import { Button} from 'antd';
class App extends Component {
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
        const intl = this.props.intl;
        let intlMessage = intl.formatMessage({id: `intl.LOGIN_SUCCESS`});
        return (
            <div>
                <Button type="primary" onClick={this.changeLang}><FormattedMessage id="intl.NETWORK_ERROR"/></Button>
                <Button type="primary"><FormattedMessage id="intl.NAME" values={{name: '变量'}}/></Button>
                {intlMessage}
            </div>

        )
    }
}

export default injectIntl(App, {withRef: true});