# event loop 作業

程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  let record = idx;
  console.log("before", record);
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
  console.log("after", record);
}

readData(0);
console.log("after");
```

程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？  
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```javascript
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}

readData(0);
console.log("after");
```
