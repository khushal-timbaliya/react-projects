import React, { Component } from 'react'

export default class Classcom extends Component {
    constructor() {
        super()
        this.state = { count: 0 };
    }
    incrment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div className='border-2 border-black w-100 m-4 flex flex-col items-center pb-3'>
                <h1 className='font-bold my-2'>Class Component</h1>
                <h1 className='mb-2'>{this.state.count}</h1>
                <button onClick={this.incrment} className='h-[30px] w-[70px] border-2 border-black bg-slate-100'>click</button>
            </div>
        )
    }
}
