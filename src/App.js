import React, {Component} from 'react';
import './App.css';
import 'react-dropdown/style.css';
import Table from "./Table.js"
import Legend from "./Legend.js"
import TableFixedHeader from "./TableFixedHeader";

class App extends Component {
    state = {
        isLegendShowed: false
    };

    onHandleClick = () => {
        this.setState(prevState => ({
            isLegendShowed: !prevState.isLegendShowed
        }));
    }

    render() {

        return (


            <div className="App">
                {this.state.isLegendShowed ?
                    (<div className={'LegendRight'}>
                        <Legend/>
                    </div>) :
                    null
                }
                <div className={'Button'}>
                    <button onClick={this.onHandleClick}>
                        {this.state.isLegendShowed ?
                            'Закрыть легенду' : 'Открыть легенду'
                        }

                    </button>
                </div>


                <div className={'TableLeft'}>
                    <TableFixedHeader/>
                    <Table asd={'123'}/>
                </div>
            </div>
        );
    }
}

export default App;
