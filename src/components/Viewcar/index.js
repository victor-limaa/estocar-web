import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {IoMdArrowRoundBack, IoMdTrash} from 'react-icons/io'
import './styles.css'
import api from '../../api'
import fb from '../../fb'



function Viewcar (props) {

    const history = useHistory()

    const voltar = () => {
        history.push('/home')
    }

    let id = useParams().id

    const deletar = async () => {
        

        const token = localStorage.getItem('authorization-token')

        await fb.remImg(props.image)
        
        await api.delete(`${id}`,
        {headers: {'authorization-token': token}})

        history.push('/home')

    }

    return(
        <div className='viewBox d-flex flex-column m-5'>
            
            <div className='d-flex justify-content-between w-100'>
            <button onClick={voltar} className='btn m-3 back'>
                <IoMdArrowRoundBack/>
            </button>
            <button onClick={deletar} className='btn m-3 trash'>
                <IoMdTrash/>
            </button>
            </div>
            
            
            <div className='imgBox d-flex'>
                <img src={props.image} />
            </div>                    
            <div className='infoBox d-flex m-3 justify-content-around'>
                <div>
                <h5 className='mb-0 mt-2'>Marca:</h5>
                {props.marca}
                <h5 className='mb-0 mt-2'>Modelo:</h5>
                {props.modelo}
                <h5 className='mb-0 mt-2'>Placa:</h5>
                {props.placa}
                <h5 className='mb-0 mt-2'>Cor:</h5>
                {props.cor}
                <h5 className='mb-0 mt-2'>Cambio:</h5>
                {props.cambio}
                </div>
                <div>
                    <h5 className='mb-0 mt-3'>Opcionais:</h5>
                    <div className='pl-3 opc mb-2'>{props.opcionais}</div>
                    <div className='d-flex align-items-center'>
                    <h5>Valor:</h5>
                    <h6 className='ml-3'>{props.valor}</h6>
                    </div>
            </div>

    <button className='btn btnReservar align-self-end'>{!props.cliente ? 'Reservar' : props.cliente }</button>
            </div>
        </div>

    )

}

export default Viewcar