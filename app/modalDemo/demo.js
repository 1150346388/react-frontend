import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/modal';

export default class Demo extends React.Component {
    componentDidMount() {

    }

   //确定触发事件
    makeSure(){
          console.log('1111');
          setTimeout(this.refs.modalDemo1.closeModal(), 1000);
        }
     //打开弹框
     openModalDemo(){
        this.refs.modalDemo1.openModal();
     }   

    render() {
        

        const footer=[{
            'label':'确定',
            'classN':'btn btn-primary',
            'callBack':''
        },{
           'label':'取消',
            'classN':'btn btn-default',
            'callBack':'close' 
        }];
        return (
            <div>
         <div onClick={this.openModalDemo.bind(this)}>查看modal框</div>
          <Modal  title= '注意规则' datas={footer} makeSure={this.makeSure.bind(this)} ref="modalDemo1">
           <div data-i18n="only_for_new_user">1. 本活动只针对新注册用户</div>
                    <div data-i18n="get_voucher_after_register">2. 用户注册完成自动获取1000元无门槛代金券</div>
                    <div data-i18n="voucher_deadline">3. 代金券有效使用期15天，逾期将自动清零</div>
                    <div data-i18n="voucher_only_for_one_mechine">4. 代金券只允许换购一台云服务器</div>
                    <div data-i18n="same_account_only_voucher">5. 同一账号只能享受一次代金券赠送</div>
                    <div data-i18n="tel_of_upCloud">6. 上云服务免费名额请咨询400-7842-782客服电话</div>
                    <div data-i18n="punish_due_to_users">7. 恶意刷抢活动资源的用户将被封号、并清理设备数据</div>
                    <div data-i18n="power_explain_beloneTo">8. 活动最终解释权在法律范围内归新致云（上海全端网络科技有限公司）所有</div>
          </Modal>
            </div>
            
        )
    }
}
