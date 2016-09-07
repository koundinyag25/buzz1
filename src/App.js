import React from 'react';
import MainWordList from './components/mainWordList';
import Timer from './components/timer';
import $ from 'jquery';
import Header from './components/header';
import LetterSelector from './components/letterSelector';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words:'',
      time:10
    }
}


render(){
  const { words } = this.state
    return(
    <div>
    <Header />
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <LetterSelector words={words}/>
          </div>
          <div className="col-md-3"></div>
      </div>
    </div>


    );
  }
}



export default App;
