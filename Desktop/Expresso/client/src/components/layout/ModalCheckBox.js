import React from 'react';


function ModalCheckBox ({hosts}) {

    const {name} = hosts;

return (

    <div>
    <input className="checkbox-effect" id={name} type="checkbox"/>
    <label for={name}>{name}</label>
</div>

)}
export default ModalCheckBox; 