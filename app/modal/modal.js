import React from "react";

export default class Modal extends React.Component {

    componentDidMount() {
        this.openModal();
    }

	// ========================================= 自定义方法 =================================================
     
     //关闭弹框
    closeModal(){
    	$(this.refs.selfModal).modal('hide');
    }
    
    //打开弹框
    openModal(){
    	$(this.refs.selfModal).modal('show');
    }

	render(){
        
		const {title,footer,datas,makeSure, ...others} = this.props;

		let btStyle = datas.length>1?{}:{'textAlign':'center'};
		return (
	  <div className="modal fade" ref='selfModal' tabIndex="-1" role="dialog" >
          <div  className="modal-dialog " role="document">
            <div className="modal-content" style={{'marginTop': '25%'}}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" >&times;</span></button>
                    <h4 className="modal-title">{title}</h4>
                </div>
                <div className="modal-body">
                    {React.Children.map(this.props.children, (element, i) => {
                        let ele = Object.assign({}, element);
                        return ele;
                })}
                </div>
                <div className="modal-footer" style={btStyle}>
                    
                    {datas.map((foot, i) => {
					return(
						<button type="button" className={foot.classN} data-dismiss={foot.callBack=='close'?'modal':''} onClick={this.props.makeSure} key={i}>{foot.label}</button>
					);
				})}
                    
                </div>
            </div>
        </div>
        </div>
        )
	}
}