import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import api from '../../api'
import { useParams, useHistory } from 'react-router-dom'


function Home () {


    var [cars, setCars] = useState([])

    useEffect(() => {

        const getCar = async () => {
                const token = localStorage.getItem('authorization-token')

                const res = await api.get('home',
                {headers: {'authorization-token': token}})
                
                setCars(res.data)
        }
    
        getCar()
    }, [])

    
    return(
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                {   
                    cars.map(car => 
                        <div className='col-auto m-3' key={car._id}>
                            <Card placa={car.placa} imgCar={car.image}
                            marca={car.marca} modelo={car.modelo} _id={car._id}
                            valor={car.valor} cambio={car.cambio}/>
                        </div>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Home