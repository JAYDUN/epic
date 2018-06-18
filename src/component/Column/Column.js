import React,{Component} from 'react';
import s from './Column.css';

class Column extends Component {



    render(){
        const {arr,deleted,col} = this.props;
        const List = () => {
            return(
                <ul className={s.list}>
                    {
                        arr.map((item,index) => {
                            return(
                                <li className={s.item} key={item.id}>
                                    {item.item}
                                    <div className={s.btn}  data-id={item.id} data-col={col} onClick={deleted}>X</div>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
        return(
            <div className={s.container}>
                <p className={s.title}>{this.props.title}</p>
                <List/>
            </div>
        )
    }
}

export default Column;