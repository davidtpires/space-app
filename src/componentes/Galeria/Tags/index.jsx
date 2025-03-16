import styled from 'styled-components'
import tags from './tags.json'

const ContainerTags = styled.div`
    margin-top: 77px;
    display: flex;
    gap: 12px;
`

const BotaoTags = styled.button`
    background-color: rgba(217, 217, 217, 0.3);
    color: #FFF;
    border-radius: 10px;
    border-color: #FFF;
    padding: 10px 8px;
`
const ParagrafoTags = styled.p `
    color: #FFF;
`


const Tags = () => {
    return <ContainerTags>
        <ParagrafoTags>Busque por tags:</ParagrafoTags>
        {tags.map(tag => <BotaoTags key={tag.id}>{tag.titulo}</BotaoTags>)}
    </ContainerTags> 
}

export default Tags