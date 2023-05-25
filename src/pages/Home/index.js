import React, { useState, useRef} from "react" ;
import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"

import { H1 } from "../../componentes/title/style";
import { ContainerItens } from "../../componentes/containerItens/style";

import {
  Container,
  Image,
  InpuLabel,
  Input,
  Button,
 
} from "./style.js"


function App() {
  const [users, setUsers] = useState([])
  const navigate =useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const {data:newUser} = await axios.post("http://localhost:3001/users" ,{ 
      name: inputName.current.value, age: inputAge.current.value });

      setUsers([...users, newUser ]);

      navigate("/usuarios");
  }

 return <Container>
    <Image alt="pessoas-conversando" src={People} />

    <ContainerItens>
      <H1>Olá!</H1>

      <InpuLabel>Nome</InpuLabel>
      <Input ref={inputName} placeholder='Nome' />

      <InpuLabel>Idade</InpuLabel>
      <Input ref={inputAge} placeholder='Idade' />

      <Button onClick={addNewUser}>Cadastrar <img alt="arrow" src={Arrow} /></Button>

      

    </ContainerItens>
  </Container>
  


}


export default App