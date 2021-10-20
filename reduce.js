let data = [
  { id: 1, title: "AAAA", price: 100, count: 2 },
  { id: 4, title: "BBBB", price: 200, count: 1 },
  { id: 6, title: "CCCC", price: 300, count: 1 },
  { id: 2, title: "DDDD", price: 500, count: 2 },
];

//acc累計值

let result = data.reduce(function (acc, item) {
  //item{ id:4,title:"BBBB",price:200,count:1},
  //acc:200
  return acc + item.price * item.count;
  //return 200+200*1=>400
}, 0);
console.log(result);

let a = () => {
  console.log(a);
};

(a) => {
  console.log(a);
};
