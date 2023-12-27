import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import toast, { Toaster } from 'react-hot-toast';
import { faLocation, faDollarSign ,faPhone,faVoicemail,faBuilding} from '@fortawesome/free-solid-svg-icons'
import { saveJobApplication } from '../../utility/localstorage';


const JobDetails = () => {
    const job = useLoaderData();
    const { id } = useParams();
    console.log(id);
    console.log(job);
       const parsedId = parseInt(id, 10);

    // const exist = job.find(jb => jb.id === parsedId );
    const exist = Array.isArray(job) && job.find(jb => jb.id === parseInt(id));
    console.log(exist);
    const contact_information = exist?.contact_information || {};

    // const handleApplyJob = ()=>{
        
    //     saveJobApplication(parsedId);
    //     toast('You have applied successfully');

    // }