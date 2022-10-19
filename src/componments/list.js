import react from 'react';
import { Button } from 'react-bootstrap';
import './list.css';
import {AiFillHome} from 'react-icons/ai';
import{MdOutlineExplore ,MdOutlineSubscriptions,MdOutlineVideoLibrary} from 'react-icons/md';
import {FaHistory} from 'react-icons/fa';



export default function list() {
    return (
     <>
         <div className='col-1'>
            <div className='row mb-5 '>
               <AiFillHome size="1.5em"/>
            </div>
            <div className='row mb-5'>
               <MdOutlineExplore size="1.5em" />
            </div>
            <div className='row mb-5 '>
               <MdOutlineSubscriptions  size="1.5em"/>
            </div>
           
             <div className='row mb-5'>
               <MdOutlineVideoLibrary size="1.5em"/>
            </div> 
            
            <div className='row mb-5'>
               <FaHistory size="1.5em"/>
            </div>
         </div>

         <div className='col-11'>
        <div className='row'>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">All</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm" >Music</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">Mixes</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">live</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm" >Mr.Bean</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">choufliHal</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">Info</Button>
            </div>
           
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">DeepHouse</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">website</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">fairuz</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">riles</Button>
            </div>
            <div className='col-1 btt'>
                <Button variant="outline-secondary" size="sm">enfant</Button>
            </div>
          



        </div>
        </div>
        </>
    )
}