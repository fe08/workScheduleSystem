import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import 'antd/dist/antd.css'
import { Title, StyledDatePicker } from './style.js'
import { DatePicker } from 'antd'
import MainTable from './table'
import { actions } from '../store'



class Schedule extends Component {  
    render() {
        const { date, onChange, } = this.props
        return ( 
            <Fragment>
                <Title>信息科排班表</Title> 
                <StyledDatePicker>
                    <DatePicker onChange={onChange}/>
                    <br/>
                    {date}
                </StyledDatePicker>
                <MainTable/>
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getData()
    }    
}

const mapState = (state) => {
    return ({
        date: state.get('date')
    })
}

const mapDispatch = (dispatch) => {
    return ({
        onChange: (date, dateString) => (dispatch(actions.selectDate(dateString))),
        getData: () =>  dispatch(actions.getData())
    })
}

export default connect(mapState, mapDispatch)(Schedule);