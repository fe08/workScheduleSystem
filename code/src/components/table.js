import { Table } from 'antd'
import React from 'react';
import { connect } from 'react-redux'
import { actions } from '../store'
import { TableWrapper } from './style.js'


const MainTable = ({dataSource, columns}) => {
    return (
        <TableWrapper>
            <Table
                onRow={(record) => {
                    return {
                        onClick: () => console.log('record', record),
                }}}
                onCell={(record) => {
                    return {
                        onMouseEnter: () => console.log('record', record),
                }}}
                columns={columns}
                dataSource={dataSource}
                bordered
                size={'middle'}
            />
        </TableWrapper>
    )
}

const mapState = (state) => {
    return ({
        dataSource: state.get('dataSource').toJS(),
        columns: state.get('columns').toJS(),
    })
}

const mapDispatch = (dispatch) => {
    return ({


    })
}

export default connect(mapState, mapDispatch)(MainTable)