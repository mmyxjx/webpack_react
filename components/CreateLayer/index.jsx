import '../ItemEditor/style.less';
import React, {PropTypes} from 'react';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired

};
class CreateLayer extends React.Component{

    render(){
        const {onSave, onCancel} = this.props;
        const item = {title: '', content:''};//item存在时返回的是编辑页，item不存在时设置返回空的title和content来初始化编辑页

        let save = () => {
            const title = this.refs.title.value;
            const content = this.refs.content.value;
            if(title == ''|| content == ''){
                alert('请输入完整信息');
                return;
            } else {
                onSave({
                    title: title,
                    content: content
                });
            }


        };



        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">创建</button>
                    <button onClick={onCancel} className="btn btn-secondary">取消</button>

                </div>
                <div className="edit-area">
                    <input type="text" ref="title" placeholder="请填写标题" defaultValue={item.title}/>

                    <textarea ref="content" placeholder="请填写内容" defaultValue={item.content}></textarea>
                </div>

            </div>
        );
    }

}
CreateLayer.propTypes = propTypes;

export default CreateLayer;