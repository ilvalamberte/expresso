import React from 'react'
import {FcTodoList} from 'react-icons/fc'
import {FcDisclaimer} from 'react-icons/fc'
import {GrFormClose} from 'react-icons/gr'
import { FcSearch } from 'react-icons/fc'
import Toggle from '../layout/Toggle.js'


const Card = (props) => {
   
    return (
        
           <div class="card">
          <div class="additional">
       
            <div class="user-card">
            {props.mainIcon}
            </div>
            <div class="more-info">
              <h1>{props.name}</h1>
              <div class="stats">
                <div>
                  <div class="title">{props.filter1}</div>
                  <div>{props.filter1icon}</div>
                </div>
                <div>
                  <div class="title">{props.filter2}</div>
                  <div>{props.filter2icon}</div>
                </div>
                <div>
                  <div class="title">{props.filter3}</div>
                  <div>{props.filter3icon}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="general">
            <h1>{props.name}</h1>
          </div>
        </div>
  
    
    )
}

export default Card