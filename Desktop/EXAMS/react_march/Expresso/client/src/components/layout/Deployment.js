import React from 'react'

const Deployment = ({jobs}) => {
    
    const {name, version, host, status, date_time} = jobs

return (
    <div className="flex-table--row">

<span>{name}</span>
<span>{version}</span>
<span>{host}</span>
<span>{date_time}</span>
<span> <button className={'badge '+ (status === "success" ? 'success' : status === "processing" ? 'warning' : 'failed')}>
{status} </button>
</span>
    </div>
)
} 
export default Deployment
