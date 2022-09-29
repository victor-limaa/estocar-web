import React, { useState } from 'react'
import {FaPowerOff, FaBars} from 'react-icons/fa'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import logo from './../../assets/logo.png'

function Navbar (props) {
    let history = useHistory()

    const logout = () => {
        localStorage.removeItem('authorization-token')
        history.push('/')
    }

    return (
        <nav className='myBg navbar navbar-expand-lg justify-content-between '>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><FaBars/></span>
            </button>
            <img src={logo} className='navbar-brand pl-3 logoNav'/>
            
            <div>
            <div className='collapse navbar-collapse' id="navbarTogglerDemo03">
                <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                    <li className='nav-item sizeSearch'>
                        {props.searchBar}
                    </li>
                </ul>
            </div>
            </div>

            <div>

            <div className='collapse navbar-collapse' id="navbarTogglerDemo03">
                <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                    <li className='nav-item'>
                       <Link to='/newcar'><button className='btn btnColor'>Cadastrar carro</button></Link>
                    </li>
                    <li className='nav-item'>
                        <button className='btn btnColor' onClick={logout}>
                            <FaPowerOff />
                        </button>
                    </li>
                </ul>
            </div>
            </div>

        </nav>
    )
}

export default Navbar