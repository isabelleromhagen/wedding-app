import React from 'react'
import {useHistory} from 'react-router-dom'

export default function NotFoundPage() {
    const history = useHistory();


    return (
        <div className="container">
            <h3>Ooops!</h3>
            <h5>Den här sidan finns inte.</h5>
            <button onClick={()=> history.push('/')}> Till startsidan </button>
        </div>
    )
}
