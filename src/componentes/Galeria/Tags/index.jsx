import styled from 'styled-components'
import tags from './tags.json'

const ContainerTags = styled.div`
    margin-top: 77px;
    display: flex;
    gap: 12px;
`

const BotaoTags = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const ParagrafoTags = styled.p `
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`


const Tags = () => {
    return <ContainerTags>
        <ParagrafoTags>Busque por tags:</ParagrafoTags>
        {tags.map(tag => <BotaoTags key={tag.id}>{tag.titulo}</BotaoTags>)}
    </ContainerTags> 
}

export default Tags