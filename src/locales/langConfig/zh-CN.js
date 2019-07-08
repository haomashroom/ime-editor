/*全局配置提示消息内容*/
const snackbars = {
    'intl.NETWORK_ERROR': "网络错误,请重新尝试", //键值在组件进行国际化时对应的就是id,具体见组件如何使用
    'intl.SUCCESS': '操作成功',
    'intl.PHONE_EXITS': '手机号码已存在',
    'intl.CODE_ERROR': '验证码错误',
    'intl.LOGIN_SUCCESS': '登录成功',
    'intl.NAME': '你好, 我的名字是{name}'
};

const zh_CN = {
    ...snackbars
};

export default zh_CN;
