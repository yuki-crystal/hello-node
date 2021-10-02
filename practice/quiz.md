## event loop 作業
**程式 1: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼?**
 <pre><code> function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}
readData(0);
console.log("after");
</code></pre>


**Answer:**
<pre><code>
執行結果為從1印到500, after在500後印出，因那些遞迴呼叫回在同一次的call stack中被執行，執行到最後才會執行 console.log("after")。
</code></pre>




**程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？**  
<pre><code>
程式 2: 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？
提示: 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

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
</code></pre>


**Answer:**
<pre><code>
執行結果為從1印到500, after在100後印出，因第一次呼叫setTimeout後，第一個readData就直接結束了，接著執行console.log("after")，剩下的readata都會放到task queue中延後執行。
</code></pre>
