import React from 'react'
import { useSelector } from "react-redux"


function GenderIdentities() {
    const user = useSelector(user => user)

    return (
        <div>
            <h1> 
                Gender is far more than society would like us to believe it is.<br/> It is a part of life and like all things in life gender and gender roles are an ever changing 
                presentation of ourselves.<br /> Here is a place to wonder and experiment with what gender and gender identities mean to you.
            </h1>
            <br/>
            <div className='list'>
                <ul>
                    <li> {user} identifies as agender </li>
                    <li> {user} identifies as androgyne </li>
                    <li> {user} identifies as bigender </li>
                    <li> {user} identifies as cis-male </li>
                    <li> {user} identifies as cis-female </li>
                    <li> {user} identifies as intersex </li>
                    <li> {user} identifies as gender fluid </li>
                    <li> {user} identifies as gender nonconforming </li>
                    <li> {user} identifies as gender questioning </li>
                    <li> {user} identifies as gender variant </li>
                    <li> {user} identifies as genderqueer </li>
                    <li> {user} identifies as none </li>
                    <li> {user} identifies as neutrois </li>
                    <li> {user} identifies as non-binary </li>
                    <li> {user} identifies as pangender </li>
                    <li> {user} identifies as transfemale  </li>
                    <li> {user} identifies as transmale</li>
                    <li> {user} identifies as transfeminine </li>
                    <li> {user} identifies as transmasculine</li>
            </ul>
            </div>
        </div>
    )
}

export default GenderIdentities