import React, { useEffect, useState } from 'react'
import api from '../../api'
import Viewcar from '../../components/Viewcar'
import { useParams } from 'react-router-dom'



function Car (){

    let id = useParams().id
    const [car, setCar] = useState('')

    useEffect(() => {
        
        async function fetchData(){
            const token = localStorage.getItem('authorization-token')

            const res = await api.get(`${id}`,
            {headers: {'authorization-token': token}})
            
            setCar(res.data)

        }
        fetchData()
    }, [])

    
        return(

            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <Viewcar marca={car.marca} modelo={car.modelo}
                        placa={car.placa} cambio={car.cambio} cor={car.cor}
                        opcionais={car.opcionais ?
                            car.opcionais.map((item,index) => <p key={index}>{item}</p>) : ''}
                        valor={car.valor} image={car.image ? car.image : ''}/>
                    </div>
                </div>
            </div>
        )

}

export default Car