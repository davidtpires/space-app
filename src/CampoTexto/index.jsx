import { styled } from "styled-components"

const InputBusca = styled.input`
    height: 30px;
    width: 350px;
    background-color: transparent;
    color: white;
    ::placeholder{
        color: ;
    }
    
`
const CampoTexto = () => {
    return (
        <InputBusca placeholder="O que você procura?">

        </InputBusca>
    )
}

export default CampoTexto