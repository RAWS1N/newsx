import React from 'react'
import {Title,Container,Date,Summery,Image,InfoContainer,ImageContainer,Hr,ImageDiv} from './styles/Article'

function Article({children,...props}) {
    return <Container {...props}>{children}</Container>
}

Article.HR = function ArticleHR({...props}){
    return <Hr {...props}/>
}

Article.ImageDiv = function ArticleImage({children,...props}){
    return <ImageDiv {...props}>{children}</ImageDiv>
}

Article.Title = function ArticleTitle({children,...props}){
    return <Title {...props}>{children}</Title>
}


Article.Date = ({children,...props}) => {
    return <Date {...props}>{children}</Date>
}


Article.Image = function ArticleImage({...props}){
    return <Image {...props}/>
}


Article.InfoContainer = function ArticleInfoContainer({children,...props}){
    return <InfoContainer {...props}>{children}</InfoContainer>
}


Article.Summery = function ArticleSummery({children,...props}){
    return <Summery {...props}>{children}</Summery>
}

Article.ImageContainer = function ArticleImageContainer({children,...props}){
    return <ImageContainer {...props}>{children}</ImageContainer>
}

export default Article