import React from "react";
import Header from "./headeer";
import Card from "./card";

const https = require("https");
const base_url = "https://api.jikan.moe/v3/search/anime?q=";

function App() {
  const [result, setResult] = React.useState([]);

  function searchElement(name) {
    https.get(base_url + name, (res) => {
      var body = "";

      res.on("data", (data) => {
        body += data;
      });

      res.on("end", () => {
        var response = JSON.parse(body);
        setResult(response.results);
      });
    });
  }


  // console.log(result);

  result.map(e=>{
    console.log(e.image_url)
  })

  return (
    <div>
      <Header Search={searchElement} />
      <hr />
      <div className="section-2">
        {result.map((e) => {
          return(<Card
            image={e.image_url}
            title={e.title}
            plot={e.synopsis}
            rating={e.score}
          />)
        })}

        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
