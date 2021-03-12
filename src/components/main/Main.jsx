import React from 'react'
import Footer from '../layout/footer'
import Header from '../layout/header'
import CommonZones from '../pageBody/commonZones'
import Cover from '../pageBody/cover'
import DescTop from '../pageBody/descTop'

function Main() {
    return (
        <div>
            <Header></Header>
            <Cover></Cover>
            <DescTop></DescTop>
            <CommonZones></CommonZones>
            <Footer></Footer>
        </div>
    )
}

export default Main
