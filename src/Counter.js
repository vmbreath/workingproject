import React, {Component, useState} from 'react';
import * as PropTypes from "prop-types";
import './Counter.css'

class Counter extends Component {
    state = {
        value: 0
    };

    render() {
        const {name} = this.props;
        const {value} = this.state;
        return <div className="Counter">
            {name}: {value}

            <button className={'increment'} onClick={()=>{
                this.setState({value: value + 1})
            }}>
                +
            </button>

            <button className={'decrement'} onClick={()=>{
                this.setState({value: value - 1})
            }}>
                -
            </button>

        </div>
    }

    componentDidMount() {
        console.log('componentDidMount: ', this.props.name)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate: ', this.props.name)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: ', this.props.name)
    }
}

Counter.propTypes = {name: PropTypes.any}

export default Counter;


/*

const {counters} = this.state;
было в Апп

                <Dropdown options={counters} onChange={this._onSelect} placeholder="Select an option"/>
                {counters.map(name => <div key={name}>
                    <Counter name={name}/>
                    <button className={'remove'} onClick={() => {
                        let newCounters = [
                            ...counters
                        ];
                        newCounters.splice(newCounters.indexOf(name), 1)
                        this.setState({
                            counters: newCounters
                        })
                    }}>
                        remove
                    </button>
                </div>)}

                <br/>
                <button className={'create'}
                        onClick={() => {
                            this.setState({
                                counters: [
                                    ...counters,
                                    prompt('new counter name', 'Counter # ' + (counters.length + 1))
                                ]
                            })
                        }}
                >
                    create new counter
                </button>
 */