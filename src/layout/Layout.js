import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

export default (props) => {
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>

    )
}