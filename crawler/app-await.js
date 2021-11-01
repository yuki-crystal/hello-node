const axios = require("axios");
const moment=require("moment")
const fs=require("fs/promises")


//排程:利用排程工具設定自動執行的時間
//crontab 或 工作排程器....


// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`

//這個async function會回傳promise

async function queryData(){
  let stockCode = "2330";
let today =moment().format("YYYYMMDD") ;//自動給當天的日期;
let format = "json";
try{
  let stoclCode =await fs.readFile("stock.txt","utf-8");
  console.log("stockCode,stockCode")
  //如果想要處理多個,split
  let res = await axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", 
  {
    params: {
      response: format,
      date: today,
      stockNo: stockCode,
    },
  }
  );
console.log(res.data);

}catch(e){
  console.error(e);
}
}
queryData();