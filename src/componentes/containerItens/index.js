import React from "react";
import { ContainerItens as Container } from "./style";

function ContainerItens({children, IsBlur}){

    return<Container IsBlur={IsBlur}>{children}</Container>
}


export default ContainerItens