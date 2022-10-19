import React from 'react';
import { Form, FormControl, Button, Icons } from 'react-bootstrap';
import { FaMicrophone, FaUserCircle } from 'react-icons/fa';
import { BiVideoPlus } from 'react-icons/bi';
import { MdNotificationsActive } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';

import image from '../image/imageytb.png';
import './navbar.css';



export default function navbar() {
    return (
        <>

          
                <div className='row'>
                    <div className='col-1'>
                        <AiOutlineMenu size="1.5em" />
                    </div>
                    <div className='col-3' >
                        <img width="110px" height="40px" src={image} />
                    </div>
                    <div className='col-5'>
                        <Form className="row">
                            <div className='col-10'>
                                <FormControl
                                    type="search"
                                    placeholder="search"
                                    aria-label="search"
                                />
                            </div>
                            <div className='col-1'>  <FiSearch  size="1.5em"/></div>
                            <div className='col-1' ><FaMicrophone size="1.5em" /></div>
                        </Form>
                    </div>

                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-1'>
                                <BiVideoPlus size="1.5em"  className='btts1'/>
                            </div>
                            <div className='col-1'>
                                <MdNotificationsActive  size="1.5em" className='btts'/>
                            </div>

                            <div className='col-1'>
                                <FaUserCircle size="1.5em" className='bttn' />
                            </div>
                        </div>
                    </div>

                </div>
            
        </>
    )
}