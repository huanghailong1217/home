import React, { Component } from 'react';
import {INCRECEAT,INPUTVALUE} from '../store/action'


class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const count = this.props.store.getState()
    //const listItem = this.props.getState()
    return (
       <div>
         <input ref={input=>this.input = input} onChange={this.handleChange.bind(this)} value={count} />
         <button onClick={this.handleAdd.bind(this)}>添加</button>
         <div>
            {/* {listItem.map((item,index)=>{
              return (<li key={index}>{item}</li>)
            })} */}
         </div>
       </div>
    )
  }
  handleChange (e) {
    let count = this.input.value
    this.props.store.dispatch(INCRECEAT(count))
  }
  handleAdd () {
     let count = this.input.value
     console.log(count)
     this.props.store.dispatch(INPUTVALUE(count))
  }
}

export default App