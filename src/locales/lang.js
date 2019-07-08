import {addLocaleData} from 'react-intl';
import zhCN from './langConfig/zh-CN.js';  //导入 i18n 配置文件,需要手动创建并填入语言转换信息
import enUS from './langConfig/en-US.js';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import {localRead,localSave} from '@/utils/utils'
addLocaleData([...en,...zh]);
class I18n{
    mergyI18n(obj){
        var customZhCn1 = {};
        var customEnUs1 = {};
        if(obj instanceof Object){
            customZhCn1 = obj['zh']||{};
            customEnUs1 = obj['en']||{};
        }
        const messages = {
            'zh': Object.assign({}, zhCN,customZhCn1),
            'en': Object.assign({}, enUS,customEnUs1)
        }
        return messages;
    }

    getI18n(obj){
        let lang = localRead('lang') || 'zh';
        console.log("lang",lang);
        localSave("lang",lang);
        const messages = this.mergyI18n(obj);
        return {
            lang:lang,
            messages:messages[lang]
        };
    }
}
export default I18n;