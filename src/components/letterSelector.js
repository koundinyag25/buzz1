import React from 'react';
import { hashHistory, Link } from 'react-router';

class LetterSelector extends React.Component{
 constructor(props){
   super(props);
  this.state={
    word_id : 0
  }
 }
  handleClick(key){

     this.setState({
       word_id : key
     });

     hashHistory.push('');
  }

  renderAlphabets(){
  let alphabets = {'a':1,'b':2,'c':3,'d':4,'e':5,'f':6,'g':7,'h':8,'i':9,'j':10,'k':11,'l':12,'m':13,'n':14,'o': 15 ,'p': 16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26};
   let boop =[];
  _.forEach(alphabets,(key,value)=>{
    boop.push( <div className='col-md-3' key={key}>
              <div className="card card-inverse card-inverse text-xs-center">
                <div className="card-block">
                    <h4>{value.toUpperCase()}</h4>
                    <Link to={'/level/'+ key}>Go to wordlist {value.toUpperCase()}</Link>
                </div>
              </div>
              </div>
          );
        });

        return boop;

  }


  render(){
    return(
      <div className='row'>
       <div>
       {this.renderAlphabets()}
       </div>
      </div>
      );
    }
  }

export default LetterSelector;
