import React,{PropTypes} from 'react';

const propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};
////定义无状态组件
function ListItem({ item, onClick }){
    let formatTime = '未知时间';
    if (item.time) {
        formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
    }

    return (

        <a href="#" onClick={onClick} className="list-group-item item-component">
            <span className="label label-default label-pill pull-xs-right">
                {formatTime}
            </span>
            <span className="item-title">{item.title}</span>

        </a>
    );
}

ListItem.proptypes = propTypes;
export default ListItem;