"use strict";
// Please don't delete the 'use strict' line above

const WEATHER_FORECAST =
  "https://www.jma.go.jp/bosai/forecast/data/forecast/011000.json";

// 問題1
const result = fetch(WEATHER_FORECAST);
result.then(response => {
  const json = response.json();
  json.then(data => {
    console.log("問題1の回答");
    console.log("明日の天気 : " + data[0].timeSeries[0].areas[0].weathers[1]);
    // console.log(data.message)
  });
});

// 問題2
function getTodaysForecast(code) {
  // const code = code.substring(0,2);
  // const codenum = parseInt(code);
  // if(codenum<1 || codenum>47){
  //     console.log(" 正しい地域コードを入力してください");
  //     return;
  // }

  // const 地域コードs = String(code);
  // if (
  // 	地域コードs.length !== 6 ||
  // 	Number(地域コードs.slice(0,2)) < 0 || 地域コードs.slice(0,2) > 47 ||
  // 	String(地域コードs).slice(-4) !== "0000"
  // 	)
  // console.log("問題２：正しい地域コードを入力してください");

  const API =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/" + code + ".json";
  const WEATHER_FORECAST = API;
  console.log(WEATHER_FORECAST);
  ("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json");

  const result = fetch(WEATHER_FORECAST);
  result.then(response => {
    if (!response.ok) {
      console.error("問題2の回答");
      console.error("正しい地域コードを入力してください");
    } else {
      const json = response.json();
      json.then(data => {
        console.log("問題2の回答");
        console.log(
          "明日の天気 : " + data[0].timeSeries[0].areas[0].weathers[1]
        );
        // console.log(data.message)
      });
    }
  });
}

getTodaysForecast("130000");

//問題3
//info = global.document.getElementsByClassName("tenki");

function getTodaysForecast2(code) {
  const API =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/" + code + ".json";
  const WEATHER_FORECAST = API;
  console.log(WEATHER_FORECAST);

  const result = fetch(WEATHER_FORECAST);
  result.then(response => {
    if (!response.ok) {
      console.error("問題3の回答");
      console.error("正しい地域コードを入力してください");
    } else {
      const json = response.json();
      json.then(data => {
        let tenki = data[0].timeSeries[0].areas[0].weathers[1];
        console.log("問題3の回答");
        console.log("明日の天気 : " + tenki);
        document.getElementsByClassName("tenki")[0].innerHTML = tenki;
        // console.log(data.message)
      });
    }
  });
}

getTodaysForecast2("011000");

//問題4
function getTodaysForecast3(code) {
  const API =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/" + code + ".json";
  const WEATHER_FORECAST = API;
  console.log(WEATHER_FORECAST);

  const result = fetch(WEATHER_FORECAST);
  result
    .then(response => {
      if (!response.ok) {
        console.error("問題4の回答");
        console.error("正しい地域コードを入力してください");
      } else {
        const json = response.json();
        json.then(data => {
          let tenki = data[0].timeSeries[0].areas[0].weathers[1];
          console.log("問題4の回答");
          console.log("明日の天気 : " + tenki);
          document.getElementsByClassName("tenki")[0].innerHTML = tenki;
          // console.log(data.message)
        });
      }
    })
    .catch(error => {
      console.log("catch:", error);
    });
}

getTodaysForecast3("0111000");
