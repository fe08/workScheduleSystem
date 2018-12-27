import { constants } from "./index";
import { fromJS } from 'immutable';

const curDate = new Date()
const date = curDate.toLocaleDateString().replace(/\//g, '-')

const defaultState = fromJS({
    date: date,
    dataSource: [],
    columns: [{
        title: '星期',
        children: [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
        }]
    }, {
        title: '星期一',
        children: [{
            title: '2018-12-24',
            dataIndex: 'Monday',
            key: 'Monday',
        }]
    }, {
        title: '星期二',
        children: [{
            title: '2018-12-25',
            dataIndex: 'Tuesday',
            key: 'Tuesday',
        }]
    }, {
        title: '星期三',
        children: [{
            title: '2018-12-26',
            dataIndex: 'Wednesday',
            key: 'Wednesday',
        }]
    }],
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SELECT_DATE:
            return state.set('date', action.date)
        case constants.CHANGE_DATASOURSE:
            return state.set('dataSource', fromJS(action.dataSource))
        default:
            return state
    }
}





