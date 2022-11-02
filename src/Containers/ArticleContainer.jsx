import React from "react";
import { Article } from "../Components";

function ArticleContainer({ articles, lastElement }) {
  return (
    <div>
      {articles.map((article, idx) => {
        const { title, summary, image, author, dateLong } = article;
        const timeString = new Date(dateLong);
        if (articles.length === idx + 1) {
          return (
            <Article key={idx} ref={lastElement}>
              <Article.ImageContainer>
                <Article.Image src={image} alt="no-image" />
                <Article.Date> source: {author}</Article.Date>
              </Article.ImageContainer>
              <Article.InfoContainer>
                <Article.Date>{timeString.toUTCString()}</Article.Date>
                <Article.Title>{title}</Article.Title>
                <Article.Summery>{summary}</Article.Summery>
              </Article.InfoContainer>
            </Article>
          );
        } else {
          return (
            <Article key={idx}>
              <Article.ImageContainer>
                <Article.Image src={image} alt="no-image" />
                <Article.Date> source: {author}</Article.Date>
              </Article.ImageContainer>
              <Article.InfoContainer>
                <Article.Date>{timeString.toUTCString()}</Article.Date>
                <Article.Title>{title}</Article.Title>
                <Article.Summery>{summary}</Article.Summery>
              </Article.InfoContainer>
            </Article>
          );
        }
      })}
    </div>
  );
}

export default ArticleContainer;
