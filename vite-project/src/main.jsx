import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>chai peo</h1>
    )
}

const newElement = (
    <a href='www.google.com' target='_blank'>Visit google</a>
)

const advanceElement = React.createElement(
    'a',
    {href:'www.google.com',target:'_blank'},
    'click me to visit google '
)

createRoot(document.getElementById('root')).render(
    advanceElement
)
