import React from 'react';
import './App.css';
import Card from './Card';
import Heading from './Heading';
import Sdata from './Sdata';

function App() {
  return (
    <>
      <Heading />
      {/* <Card
        title={Sdata[0].title}
        imgsrc={Sdata[0].imgsrc}
        category={Sdata[0].category}
        link={Sdata[0].link}
      />
      <Card
        title={Sdata[1].title}
        imgsrc={Sdata[1].imgsrc}
        category={Sdata[1].category}
        link={Sdata[1].link}
      />
      <Card
        title={Sdata[2].title}
        imgsrc={Sdata[2].imgsrc}
        category={Sdata[2].category}
        link={Sdata[2].link}
      />
      <Card
        title={Sdata[3].title}
        imgsrc={Sdata[3].imgsrc}
        category={Sdata[3].category}
        link={Sdata[3].link}
      />
      <Card
        title={Sdata[4].title}
        imgsrc={Sdata[4].imgsrc}
        category={Sdata[4].category}
        link={Sdata[4].link}
      /> */}
      {Sdata.map((val, idx, arr) => {
        return (
          <Card
            key={val.id}
            title={val.title}
            imgsrc={val.imgsrc}
            category={val.category}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
