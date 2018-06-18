import React,{Component} from 'react';
import s from './AddItemBox.css';
import AddItem from '../AddItem/AddItem';
import Column from '../Column/Column';
import SearchBox from '../SearchBox/SearchBox';
import {connect} from 'react-redux';
import {getColumn1List,getColumn2List} from '../../redux/actions/getColumn';
import {deleteColumnItem} from '../../redux/actions/deleteItem';
import {searchCol1Item,searchCol2Item} from '../../redux/actions/searchItem';

class AddItemBox extends Component {


    componentDidMount = () => {
        this.props.getColumn1List();
        this.props.getColumn2List();
    };

    deleteHandler = (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const col = e.currentTarget.getAttribute('data-col');
        this.props.deleteColumnItem(col,id);
    };

    searchHandler = (e) => {
        console.log(e.currentTarget.value);
        const key = e.currentTarget.value;
        const colfilter1 = this.props.col1.filter(item => {
            return item.item.toLowerCase().includes(key.toLowerCase());
        });
        const colfilter2 = this.props.col2.filter(item => {
            return item.item.toLowerCase().includes(key.toLowerCase());
        });
        this.props.searchCol1Item(colfilter1);
        this.props.searchCol2Item(colfilter2);
        if(key === '') {
            this.props.getColumn1List();
            this.props.getColumn2List();
        }
    }


    render(){


        return(

            <div className={s.container}>

                <p className={s.header}>
                    ADD AN ITEM
                </p>
                <div className={s.left}>
                    <AddItem/>
                    <SearchBox search={this.searchHandler}/>
                </div>
                <div className={s.right}>
                    <Column title="COLUMN 1" arr={this.props.col1} col="1" deleted={this.deleteHandler}/>
                    <Column title="COLUMN 2" arr={this.props.col2} col="2" deleted={this.deleteHandler}/>
                </div>

                {this.props.postCol === '1' || this.props.delCol ==='1'?this.props.getColumn1List():null}
                {this.props.postCol === '2' || this.props.delCol ==='2'?this.props.getColumn2List():null}

            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        col1:state.Column.column1,
        col2:state.Column.column2,
        postCol:state.Column.postCol,
        delCol:state.Column.delCol,

    }
};

const mapDispatchToProps = dispatch => {
    return{
        getColumn1List:() => getColumn1List(dispatch),
        getColumn2List:() => getColumn2List(dispatch),
        deleteColumnItem:(col,id) => deleteColumnItem(dispatch,col,id),
        searchCol1Item:(newCol) => dispatch(searchCol1Item(newCol)),
        searchCol2Item:(newCol) => dispatch(searchCol2Item(newCol))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddItemBox);