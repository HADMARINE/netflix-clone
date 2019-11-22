async function getMovieData() {
  //   const req = await client.get("/", {});

  let resultArray = new Array();
  await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr",
    { method: "GET" }
  )
    .then(res => res.json())
    .then(data => {
      resultArray = data.results;
    });
  return resultArray;
}

export default getMovieData;
