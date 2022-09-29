import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './styles.css'
import api from '../../api'
import fr from '../../fb'
import fb from '../../fb'

  
function Newcar () {

    const [fbImg, setFbimg] = useState()
    const [marca, setMarca] = useState()
    const [modelo, setModelo] = useState()
    const [placa, setPlaca] = useState()
    const [cor, setCor] = useState()
    const [cambio, setCambio] = useState()
    const [valor, setValor] = useState()
    const [opcionais] = useState([])
    
    const handleAddOpc = (e) => {
        opcionais.push(e.target.value)
    }

    let history = useHistory()

    const cadastrar = async () => {

            try {const token = localStorage.getItem('authorization-token')
            var image = {link: ''}
            
            await fb.addImg(fbImg).then(
                res => 
                res.ref.getDownloadURL().then(url => image.link = url)
            )
            
            await api.post('newCar', {image: image.link, marca, modelo, placa, cor, cambio, valor, opcionais},
                {headers: {'authorization-token': token}}
            )
            
            history.push('/home')
        }
            catch(err){
                console.log(err)
            }

    }
    const cancelar = () => {
        history.push('/home')
    }

    var previewImg

    if(fbImg){
        previewImg = URL.createObjectURL(fbImg)
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-auto'>

                    <div className='newcarbg mt-5 d-flex'>
                        <div className='d-flex flex-column'>
                        <div>
                        <div className='mt-3 ml-5'>
                            <input type='file' onChange={(e) => setFbimg(e.target.files[0])} />
                            <div className='imgbox mt-1'>
                                <img src={previewImg} />
                            </div>
                        </div>
                        
                        <div className='box1 mt-4 ml-5 p-3'>
                            <h4>Marca:</h4>
                            <input type='text' onChange={(e) => setMarca(e.target.value)}/>
                            <h4>Modelo:</h4>
                            <input type='text' onChange={(e) => setModelo(e.target.value)}/>
                            <h4>Placa:</h4>
                            <input type='text' onChange={(e) => setPlaca(e.target.value)}/>
                            <h4>cor:</h4>
                            <input type='text' onChange={(e) => setCor(e.target.value)}/>
                        </div>
                        </div>

                        <div className='box2'>
                            <div className='d-flex justify-content-around mt-4'>
                                <h4>Opcionais:</h4>
                                <div className='mt-5'>
                                    <input type='checkbox'  value='Airbags' onChange={handleAddOpc}  />Airbags<br/><br/>
                                    <input type='checkbox' value='Alarme' onChange={handleAddOpc} />Alarme<br/><br/>
                                    <input type='checkbox'  value='Ar Condicionado' onChange={handleAddOpc} />Ar Condicionado<br/><br/>
                                    <input type='checkbox' value='Trava Eletrica' onChange={handleAddOpc} />Trava Elétrica<br/><br/>
                                    <input type='checkbox' value='Direcao Hidraulica' onChange={handleAddOpc} />Vidro Elétrico<br/><br/>
                                </div>
                                <div className='mt-5'>
                                    <input type='checkbox' value='Som' onChange={handleAddOpc} />Som<br/><br/>
                                    <input type='checkbox' value='Sensor de Re' onChange={handleAddOpc} />Sensor de Ré<br/><br/>
                                    <input type='checkbox' value='Camera de Re' onChange={handleAddOpc} />Camera de Ré<br/><br/>
                                    <input type='checkbox' value='Blindado' onChange={handleAddOpc} />Blindado<br/><br/>
                                    <input type='checkbox' value='Direcao Hidraulica' onChange={handleAddOpc} />Direção Hidraulica<br/><br/>
                                </div>
                            </div>

                            <div className='mt-5 mb-5 ml-3'>
                                <h4>Cambio:</h4>
                                <span className='mr-5 ml-4'><input type='radio' name='cambio' value='Manual' onChange={(e) => setCambio(e.target.value)}/>Manual</span>
                                <input type='radio' name='cambio' value='Automatico' onChange={(e) => setCambio(e.target.value)}/>Automatico
                            </div>

                            <h4 className='ml-3'>Valor:</h4> <input className='ml-4' type='number' name='valor' onChange={(e) => setValor(e.target.value)} />
                        </div>
                        <div className='divbtn'>
                            <button className='btn cancel' onClick={cancelar}>Cancelar</button>
                            <button className='btn cad' onClick={cadastrar}>Cadastrar</button>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Newcar