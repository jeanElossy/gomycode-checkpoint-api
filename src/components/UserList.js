import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";


const UserList = () => {

    const [listOfUser, setListOfUser] = useState([])

 //premiere maniere de communication avec API avec axios en utilisant async et await 
    useEffect(() => {

        //creer une fonction qui va faire appel a API 
        const getData = async () => {
            const resutlt = await axios({
                method: "GET",
                url : "https://jsonplaceholder.typicode.com/users",
            });
            
            // si l'appel a reussir on stock le resultat (res) dans data
            setListOfUser(resutlt.data);            
        };
        // la fonction se lance ici 
        getData();

        //le tableau vide sert a eviter une boucle infinie
    }, [])
    console.log(listOfUser)

    /*
 //deusieme maniere de communication avec API avec axios en utilisant then et catch
    useEffect(() => {
        //creer une fonction qui va faire appel a API 
        const newGetData = () => {
            axios({
                method: "GET",
                url : "https://jsonplaceholder.typicode.com/users",
            }).then((res) => { 
                // si l'appel a reussir on stock le resultat (res) dans data
                setData(res.data);

            }).catch((err) => {
                // au cas ou l'appel echoue on fait console.log() de erreur
                console.log(err);
            })
        };
        // la fonction se lance ici 
        newGetData();

        //le tableau vide sert a eviter une boucle infinie
    }, [])
    */


    return (
        <div className="user--list">
            <nav className="navbar navbar-light bg-light p-4">
                <div className="container--fluid">
                    <div className="title">
                        <h1 className="h4">Les coordonnees des utlisateurs apres communiation avec l'API Jsonplaceholder</h1>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row gap-4 justify-content-md-center mb-5">

                    {listOfUser.map((user) => (
                        <div 
                            key={user.id} 
                            className="card gap-2 col-12 col-md-5 p-4" 
                            data-aos="fade-down-left"
                        >
                            <h2 
                                className="text-center text-danger">
                                {user.name}
                            </h2>
                            <p>
                                Prenom: {""} 
                                <strong>
                                    {user.username}
                                </strong> 
                            </p>
                            <p>
                                Email: {""} 
                                <strong>
                                    {user.email}
                                </strong>
                            </p>
                            <p>
                                Numero: {""} 
                                <strong>
                                    {user.phone}
                                </strong>
                            </p>
                            <p> 
                                Addresse: {""} 
                                <strong>
                                    {user.address.street}
                                </strong>
                            </p>
                            <p>
                                Site internet: {""} 
                                <strong>
                                    {user.website}
                                </strong>
                            </p>
                        </div>
                    ))}

                </div>
            </div> 
        </div>
    )
}
export default UserList
