import React, {useContext} from 'react';


const GuestFilter = (props) => {
 

    return (
        <div className="toggle">
            <label className="switch">
                <input type="checkbox"></input>
                    <span className="slider round"></span>
            </label>
            <p className="lead">{props.version}</p>

        </div>
    )

}

export default GuestFilter