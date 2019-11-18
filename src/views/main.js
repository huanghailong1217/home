import React, { Component } from 'react';
import store from '../store/store';
import {ITEMSTATEvALUE,ITEMITEMLIST,DELETELLIST} from '../store/action'
import { Input, Button, List  } from 'antd';

class App extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
  render () {
    const data = this.state.count
      return (
          <div className=" ">
            <Input value={data.inputValue} onChange={this.handleChangValue} placeholder="Basic usage" />  
            <Button type="primary" onClick={this.handleAdd} >Primary</Button>
            <div>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data.list}
                renderItem={(item,index) => <List.Item onClick={this.handleDelete.bind(index)}>{item}</List.Item>}
                />
            </div>
            <div>
               {this.state.name}
            </div>
          </div>
      )
  }
  handleChangValue = (e) => {
     store.dispatch(ITEMSTATEvALUE(e.target.value))
  }
  storeChange = () => {
     this.setState (store.getState())
  }
  handleAdd = () => {
    store.dispatch(ITEMITEMLIST(this.state.inputValue))
  }
  handleDelete= (index) =>{
    store.dispatch(DELETELLIST(index))
  }
}

export default App

