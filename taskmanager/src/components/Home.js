import React from 'react'
import { Container } from 'react-bootstrap'
import Signin from './signin'


export default function Home(){
    return (
        <Container>
            <h1 className="mt-3">Notes App</h1>
        <Signin/>

        </Container>
    )
}
