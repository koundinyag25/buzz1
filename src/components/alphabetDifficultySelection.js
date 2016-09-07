import React from 'react';
import { Link } from 'react-router';
import Header from './header';





class AlphabetDifficultySelection extends React.Component {
constructor(props){
  super(props);
}


render(){
  let alphabets = {1:'a',2:'b',3:'c',4:'d',5:'e',6:'f',7:'g',8:'h',9:'i',10:'j',11:'k',12:'l',13:'m',14:'n', 15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',21:'u', 22:'v',23:'w',24:'x',25:'y',26:'z'};
  let difficulty = { 1: 'easy', 2:'medium', 3:'difficult'};
  return(
    <div>
    <Header />
      <div className='col-md-3'></div>
      <div className='col-md-6'>

      <center><h3>Select Difficulty Level</h3></center>
      <div className="card card-inverse card-primary text-xs-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <h4>Go to wordlist {alphabets[this.props.params.key].toUpperCase()}</h4>
          <Link to={'/words/'+this.props.params.key+'/'+1}><button className='btn btn-warning' >Easy</button></Link>
        </blockquote>
      </div>
      </div>
      <div className="card card-inverse card-primary text-xs-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <h4>Go to wordlist {alphabets[this.props.params.key].toUpperCase()}</h4>
            <Link to={'/words/'+this.props.params.key+'/'+2}><button className='btn btn-warning'>Medium</button></Link>
          </blockquote>
        </div>
        </div>
        <div className="card card-inverse card-primary text-xs-center">
          <div className="card-block">
            <blockquote className="card-blockquote">
              <h4>Go to wordlist {alphabets[this.props.params.key].toUpperCase()}</h4>
              <Link to={'/words/'+this.props.params.key+'/'+3}><button className='btn btn-warning'>Difficult</button></Link>
            </blockquote>
          </div>
        </div>

      </div>

    <div className='col-md-3'></div>
    </div>
    );
  }
}

export default AlphabetDifficultySelection;
