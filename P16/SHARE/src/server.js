const pokeData = require("./data");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const express = require("express");
  const app = express();

  // pokeDataに格納されている全てのデータを「そのまま」表示するAPI
  app.get("/api/sample", (req, res) => {
    res.send(pokeData);
  });
  //http://localhost:3000/api/sample で中身が見れる

  // ↓↓↓↓ 宿題のプログラムは、ここより下に書く
  app.get("/api/pokemon", (req, res) => {
    // res.send(pokeData.pokemon);
    let result = pokeData.pokemon;
    const limit = req.query.limit;
    console.log(limit);

    if (limit) {
      result = result.slice(0, limit);
    }

    // console.log(result);
    res.send(result);
  });

  app.get("/api/pokemon/:id", (req, res) => {
    const id = req.params.id; // URLパラメータ "id" を取得

    console.log(pokeData.pokemon[id - 1]);
    res.send(pokeData.pokemon[id - 1]);
  });
  // ↑↑↑↑ 宿題のプログラムは、ここより上に書く

  // '/'のルーティングは、その他のAPIのプログラムよりも下に記載
  app.use("/", (req, res) => {
    console.log("Hello, express");

    res.send(`
    <html>
        <body>
            <h1>Let's make Pokemon API</h1>
        </body>
    </html>
    `);
  });

  return app;
};

module.exports = { setupServer };
