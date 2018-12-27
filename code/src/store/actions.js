import {constants} from './index'
import axios from 'axios';
// import { fromJS } from 'immutable';

export const selectDate = (date) => ({
    type: constants.SELECT_DATE,
    date
})

export const changeDataSource = (dataSource) => ({
    type: constants.CHANGE_DATASOURSE,
    dataSource
})

const washData = (data) => {
    const list = ['张三','李四','王五']
    const dates= ["2018-12-24", "2018-12-25", "2018-12-26"]
    const weeks = ['Monday', 'Tuesday', 'Wednesday']
    const weekNumber = "201854"
    var d1 = data[weekNumber]
    var dataSource = []
    for(let i = 0; i < list.length; i++) {
        let o = new Object()
        o.key = i + 1
        o.name = list[i]
        let d2 = d1[o.name]
        for(let j = 0; j < dates.length; j++) {
            o[weeks[j]] = d2[dates[j]]
        }
        dataSource.push(o)
    }
    return (dispatch) => dispatch(changeDataSource(dataSource))
}

export const getData = () => {
    return (dispatch) => {
        axios.get('/api/mySql.json').then((res) => {
            const data = res.data
            dispatch(washData(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}