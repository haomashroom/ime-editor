import * as home from './action-type';

let defaultState = {
  orderSum: '222', //金额
  name: 'dake', //姓名
  phoneNo: '123', //手机号
  imgpath: '44', //图片地址
}
// 首页表单数据
export default function reducer(state = defaultState, action) {
  switch(action.type){
    case home.SAVEFORMDATA:
      console.log("action",action);
      return {...state, name: action.value};
    case home.SAVEIMG:
      return {...state, ...{imgpath: action.path}};
    case home.CLEARDATA:
      return {...state, ...defaultState};
    default:
      return state;
  }
}

