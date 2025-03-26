import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Doctors from '../Doctors';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    const getDoctorList = async () => {
        try {
            const response = await axios.get("http://localhost:9002/api/doctors", {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching doctor data:", error);
        }
    };

    useEffect(() => {
        getDoctorList();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center my-4 text-success">All Doctors</h2>
            <div className="row">
                {doctors.length > 0 ? (
                    doctors.map((doctor, index) => <Doctors data={doctor} key={index} />)
                ) : (
                    <p className="text-center text-muted">No doctors available.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorList;
