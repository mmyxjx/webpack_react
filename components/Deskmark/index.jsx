import React from 'react';

import CreateBar from '../CreateBar';
import List from '../List';
import ItemEditor from '../ItemEditor';
import ItemShowLayer from '../ItemShowLayer';
import uuid from 'uuid';

import './style.scss';

class Deakmark extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                    "id": "67yhbui",
                    "title": "Hello",
                    "content": "#testing markdown",
                    "time": 1423000999000
                },{
                    "id": "rrryhbui",
                    "title": "Hello Again",
                    "content": "#testing markdown",
                    "time": 1423800080002

                }],
            selectedId: null,
            eaditing: false
        };
        this.saveItem = this.saveItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.editItem = this.editItem.bind(this);

    }

    saveItem(item) {
        let items = this.state.items;
        // console.log(item)

        // new item
        if (!item.id) {

            items = [...items, {
                title: item.title,
                content: item.content,
                id: uuid.v4(),
                time: new Date().getTime()
            }];
            // existed item
        } else {
            items = items.map(
                exist => {
                    // console.log(exist,item.id)
                    if(exist.id === item.id){
                        // console.log(exist.id, item.id);
                        exist.title = item.title;
                        exist.content = item.content;


                    } else {
                        return exist;
                    }
                }

            );
        }

        this.setState({
            items,
            selectedId: item.id,
            editing: false,
        });
    }

    selectItem(id) {

        if( id === this.state.selectId){
            return;

        }

        this.setState({
            selectedId: id,
            editing: false
        });

    }

    createItem() {

        this.setState({

            editing: true,
            selectedId: null

        });

    }
    deleteItem(id) {
        if (!id) {
            return;
        }

        this.setState({
            items: this.state.items.filter(
                result => result.id !== id
            ),
        });
    }
    editItem(id) {
        this.setState({
            selectedId: id,
            editing: true,
        });
    }

    cancelEdit() {
        this.setState({ editing: false });
    }





    render() {


        let {items, selectedId, editing} = this.state;
        let selected = selectedId && items.find( item => item.id === selectedId);
        console.log(selected)

        let mainPart = editing ?
            <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit}/>
            :<ItemShowLayer item={selected} onEdit={this.editItem} onDelete={this.deleteItem}/>;


        return (

            <section className="deskmark-component">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <CreateBar onClick={this.createItem}/>
                            <List items={ this.state.items } onSelect={this.selectItem} />
                        </div>
                        {mainPart}

                    </div>

                </div>

            </section>
        );

    }
}
export default Deakmark;
