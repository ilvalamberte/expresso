import React, {useContext} from 'react';


const GuestFilter = (props) => {
 

    return (

/*         <div className="toggle">
            <label className="switch">
                <input type="checkbox"></input>
                    <span className="slider round"></span>
            </label>
            <p className="lead">{props.version}</p>
        </div> */


<label class="label">
<div class="toggle">
  <input class="toggle-state" type="checkbox" name="check" value="check" />
  <div class="indicator"></div>
</div>
<div class="label-text">{props.version}</div>
</label>

    )

}

export default GuestFilter