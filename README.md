# Welly Test

1. JavaScript: 字串反轉
   
```
function reverseString(str) {
  let result = ""
  result = str.split("").reverse().join();
  return result;
}
console.log(reverseString("Hello")); // 預期輸出: "olleH”
```

2. JavaScript: 陣列過濾
   
```
問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 

範例：

function filterNumbersGreaterThanFive(numbers) {
  const result = numbers.filter(el => el > 5);
  return result;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
```

3. JavaScript: 重構
   
問題：重構這段程式碼並說明原因
=> 如果傳入是firstName先開始, 空白字串會加入firstName，再來連接lastName
=> 最後結果產出firstName+lastName

```
function formatName(firstName, lastName) {
  let formattedName = '';

  if (firstName) {
    formattedName += firstName;
  }

  if (lastName) {
    formattedName += ' ' + lastName;
  }

  return formattedName;
}
```

4. React: 條件渲染
問題：在React中，如何根據條件渲染兩種不同的內容？

範例：
```
function ConditionalRendering({ isLoggedIn }) {
    return <>
            {isLoggedIn ? <div>true</div> : <div>false</div>}
           </>
}
```

5. React: 組件
問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

```
install node_modules
npm install 
```

```
Run the server
npm run dev
```

[Demo Link](http://localhost:5173/)

