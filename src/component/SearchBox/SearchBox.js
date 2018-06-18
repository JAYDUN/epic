import React,{Component} from 'react';
import s from './SearchBox.css';

class SearchBox extends Component {

    searchHandler = () => {

    }

    render(){
        return(
            <form className={s.form}>
                <label className={s.label}>SEARCH AN ITEM</label>
                <input type="text" placeholder="SEARCH" onChange={this.props.search}/>
            </form>
        )
    }
}

export default SearchBox;