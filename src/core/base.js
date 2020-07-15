import React from 'react';
import Header from './header';

const Base = ({
    title = "",
    description = "",
    className = "",
    children
})=> (
    <div>
        <Header/>
        <main role="main" className="container-fluid">
            { children }
        </main>
    </div>
);

export default Base;