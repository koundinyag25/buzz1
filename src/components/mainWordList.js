import React from 'react';
import _ from 'lodash';
import {hashHistory} from 'react-router';

class MainWordList extends React.Component{
constructor(props){
  super(props);
  this.state = {
    firstWord: 0,
    lastWord: 5,
    style : {
      display: 'none'
    },
    style1:{
      display: ''
    },
    words : [],
    id: 0,
    definition:[],
    wordIndex: 0,
    correct : 0,
    incorrect : 0
  }
  this.onOptionSelect = this.onOptionSelect.bind(this);

}
renderWords(){

  let blah =[];
    _.map(this.props.words.data,(value,key)=>{
      blah.push(
      <div className='well boop' key={value.id}>
        <button className="btn btn-primary beep" value={value.id}>{value.word}</button>:<button className="btn btn-default bloop" value={value.id}>{value.definition}</button>
      </div>);
    });
    return blah.slice(this.state.firstWord,this.state.lastWord);
}
onNextBatch(){
  let lastword;
  let firstWord;
 this.setState({
   firstWord: this.state.lastWord + 1,
   lastWord: this.state.lastWord + 6
 });
}

onPreviousBatch(){
  let firstWord;
  let lastWord;
  this.setState({
    firstWord: this.state.firstWord-6,
    lastWord: this.state.firstWord-1
  });
 if(this.state.firstWord === 0){
   this.setState({
     style : {
       display : ''
     }
   });
 }
}

onTakeTest(){
  this.setState({
    style :{
      display : ''
    },
    style1:{
      display: 'none'
    }
  });
  // hashHistory.push('/test');
}
 renderTestWord(){
  let wordsEle = document.getElementsByClassName('beep');
  let word = [];
  _.forEach(wordsEle,(data)=>{
    word.push(<div id='word' className='well' key={data.getAttribute('value')} value={data.getAttribute('value')}>{data.innerHTML}</div>);
  });
return word[this.state.wordIndex];
}

renderTestMeanings(){
  let definition=[];
  let defEle = document.getElementsByClassName('bloop');
  _.forEach(defEle,(data)=>{
    let x = data.innerHTML;
      definition.push(<div key={data.getAttribute('value') }><input type='radio' name='radio'  value={data.getAttribute('value')} onClick={(evt)=>{evt.preventDefault()},this.onOptionSelect.bind(this,data.getAttribute('value'))}/>{data.innerHTML}</div>);
     });
     return _.shuffle(definition);
}
onNext(){

    this.setState({
      wordIndex : wordIdex+ 1
    });
}
onOptionSelect(value,onNext){

  let wordIdValue = document.getElementById('word').getAttribute('value');
  if(wordIdValue === value){
    this.setState(function(state,props){
       return{
         wordIndex : state.wordIndex +1,
         correct: state.correct + 1
       }
    });
    setTimeout(()=>{document.getElementById('form').reset()},2000);
  }else if (wordIdValue != value) {
    this.setState(function(state,props){
       return{
         wordIndex : state.wordIndex +1,
         incorrect: state.incorrect + 1
       }
  });
} else if (this.state.wordIndex === 4) {
     this.setState({
        style1 : {
          display : ''
        },
        style:{
          display: none
        }
     });
}
}


render(){
  const { wordId } = this.state;
    return(
        <div className="word-wrapper">
          <div className="panel panel-default" style={this.state.style1}>
            <div className="panel-body">
              {this.renderWords()}
                <button className='btn btn-primary' onClick={this.onTakeTest.bind(this)} style={this.state.style1}>Take Test</button>
                <button className='btn btn-primary pull-right' onClick={this.onNextBatch.bind(this)} >Next</button>
                <button className='btn btn-primary pull-right' onClick={this.onPreviousBatch.bind(this)} >Previos</button>
              </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-body" style={this.state.style}>
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <div className="word-wrapper">
              <div className="panel panel-default">

                <div className="panel-body">
                <div className='col-sm-12'>
                  {this.renderTestWord()}
                  <form id='form'>
                  {this.renderTestMeanings()}
                  </form>
                   <div className='pull-left btn btn-default'>correct: {this.state.correct}</div>
                   <div className='btn btn-warning pull-right'>incorrect: {this.state.incorrect}</div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="col-md-3"></div>
            </div>
              </div>
          </div>
          </div>
    );
  }

}

export default MainWordList;
