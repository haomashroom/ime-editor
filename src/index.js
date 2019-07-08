import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '@/store/store';
/*多语言支持*/
import {IntlProvider} from 'react-intl';
import I18n from './locales/lang';
//获取I18n信息
const i18n = new I18n().getI18n();
const render = Component => {
    ReactDOM.render(
        <IntlProvider locale={i18n.lang} messages={i18n.messages}>
            <Provider store={store}>
                <AppContainer>
                    <Component/>
                </AppContainer>
            </Provider>
        </IntlProvider>,
        document.getElementById('root')
    )
}
render(Route);
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router/', () => {
        render(Route);
    })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
