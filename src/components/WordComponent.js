import React from 'react';
import MainWordList from './mainWordList';
import Timer from './timer';
import $ from 'jquery';
import Header from './header';


class WordComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words:'',
      time:10,
      wordId:'',
      Wordkey: 0,
      diff:0
    }

}

componentDidMount(){
  let boop = this.props.params.key
this.serverRequest = $.get('http://127.0.0.1:3000/words/'+ boop + '/'+ this.props.params.diff ,(res)=>{
      this.setState({
        words: res,
        wordKey: this.props.params.key,
        diff: this.props.params.diff
      });
  });
}

componentWillUnmount(){
  this.serverRequest.abort();
}



  render(){
    const {words,time,isFinished,key,diff, wordId} = this.state;
    return(
    <div>
    <Header />
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <MainWordList words ={words} wordKey={key} diff={diff} wordId={wordId}/>
          </div>
          <div className="col-md-3"></div>
      </div>
    </div>


    );
  }
}



export default WordComponent;
