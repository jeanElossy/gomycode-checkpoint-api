import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";


const UserList = () => {

    const [data, setData] = useState([])

 //premiere maniere de communication avec API avec axios en utilisant async et await 
    useEffect(() => {

        //creer une fonction qui va faire appel a API 
        const getData = async () => {
            const resutlt = await axios({
                method: "GET",
                url : "https://jsonplaceholder.typicode.com/users",
            });
            
            // si l'appel a reussir on stock le resultat (res) dans data
            setData(resutlt.data);            
        };
        // la fonction se lance ici 
        getData();

        //le tableau vide sert a eviter une boucle infinie
    }, [])

    console.log(data)

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
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList
