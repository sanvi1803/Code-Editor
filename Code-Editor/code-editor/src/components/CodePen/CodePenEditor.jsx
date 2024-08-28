/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import Code from './Code'
import DataProvider from '../../context/DataContext'
import Result from './Result'
function CodePenEditor() {
    return (
        <DataProvider>
            <Header />
            <Code />
            <Result />
        </DataProvider>
    )
}

export default CodePenEditor
