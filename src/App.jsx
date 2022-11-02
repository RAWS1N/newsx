import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { HeaderContainer, ArticleContainer } from "./Containers";
import { Loader, MiniLoader, Article } from "./Components";
import { GlobalStyle } from "./GlobalStyles";
function App() {
  const [articles, setArticles] = useState([]);
  const [total, setTotal] = useState(0);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0e1115f8f1msh76b8fd19f2dbadcp17d9f8jsn1a5b67ce1d83",
      "X-RapidAPI-Host": "newsx.p.rapidapi.com",
    },
  };

  useEffect(() => {
    let loaded = true;
    async function fetchData() {
      try {
        const data = await fetch(
          "https://newsx.p.rapidapi.com/search?limit=10&skip=0",
          options
        );
        const jsonData = await data.json();
        if (loaded) {
          setArticles([...new Set(jsonData)]);
          setTotal(jsonData.length);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    return () => (loaded = false);
  }, []);

  async function fetchMoreData() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0e1115f8f1msh76b8fd19f2dbadcp17d9f8jsn1a5b67ce1d83",
        "X-RapidAPI-Host": "newsx.p.rapidapi.com",
      },
    };

    try {
      const data = await fetch(
        `https://newsx.p.rapidapi.com/search?limit=10&skip=${total}`,
        options
      );
      const jsonData = await data.json();
      console.log(jsonData);
      setArticles((prevArticles) => [
        ...new Set(prevArticles.concat(jsonData)),
      ]);
      setTotal((prevTotal) => prevTotal + jsonData.length);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      {articles.length ? (
        <div>
          <GlobalStyle />
          <HeaderContainer />
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<MiniLoader />}
          >
            <ArticleContainer articles={articles} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
