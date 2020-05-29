const parse5 = require('parse5');

export const Test = async (props) => {

  let resultList = await fetch('http://localhost:4000/anime/fullmetal').then((res) => res.text());
  console.log(resultList);
};

export const GenerateTable = (resultList) => {

};
