import React,{Component} from 'react';
import s from './AddItem.css';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {getColumn1List,getColumn2List} from '../../redux/actions/getColumn';
import {postColumnItem} from '../../redux/actions/postItem';


class AddItem extends Component {

    renderInputField = ({
        input,
        type,
        placeholder,
        meta: { touched, error, warning }
    }) => {
        return(
            <div className={s.element}>
                <input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                />
                <p className={s.error}>{touched?error:''}</p>
            </div>
        )
    }

    renderSelectField = ({
        input,
        meta: { touched, error, warning }
    }) => {
        return(
            <div className={s.element}>
                <select {...input} >
                    <option value="0">CHOOSE COLUMN</option>
                    <option value="1">COLUMN 1</option>
                    <option value="2">COLUMN 2</option>

                </select>
                <p className={s.error}>{touched?error:''}</p>
            </div>
        )
    }

    submitHandler = (values) => {

        console.log(values.newItem,values);
        const item = values.newItem;
        const column = values.column;
        this.props.postColumnItem(column,item);
    }

    render(){

        const { handleSubmit, pristine, submitting } = this.props;

        return(
            <form className={s.form} onSubmit={handleSubmit(this.submitHandler)}>
                <Field
                    name="newItem"
                    type="text"
                    component={this.renderInputField}
                    placeholder="ENTER ITEM"
                />
                <Field
                    name="column"
                    component={this.renderSelectField}

                />

                <button type="submit" className={s.btn} disabled={pristine || submitting} >ADD ITEM</button>
            </form>
        )
    }
}
const validate = values => {
    const errors = {};
    if(!values.newItem){
        errors.newItem = 'required'
    }
    if(values.column === "0"){
        errors.column = 'required'
    }

    return errors;
}

const mapStateToProps = state => {
    return{
        postCol:state.Column.postCol,
    }
};
const mapDispatchToProps = dispatch => {
    return{
        getColumn1List:() => getColumn1List(dispatch),
        getColumn2List:() => getColumn2List(dispatch),
        postColumnItem:(column,item) => postColumnItem(dispatch,column,item)

    }
}

export default reduxForm({
    validate,
    form:'addItemForm'
})(connect(mapStateToProps,mapDispatchToProps)(AddItem));