import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Card (props){

    return(
        <div className='d-flex flex-column cardSize'>
            <div >
                <div className='d-flex flex-column align-items-center mb-2'>
                    <img src={props.imgCar} className='imgcar' />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h6 className='m-2'>{props.modelo}</h6>
                        <p className='m-0 ml-2'>{props.cambio}</p>
                        <p className='m-0 ml-2'>{props.valor}</p>
                    </div>
                    <Link to={`${props._id}`}>
                    <button className='btn cardBtn align-self-center mt-5 mr-2'
                        >
                        veja mais
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>

    )

}

export default Card