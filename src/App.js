import React, {Component} from 'react';
import './App.scss';
import 'react-dropdown/style.css';
import Table from "./Table.js"
import Legend from "./Legend.js"
import TableFixedHeader from "./TableFixedHeader";


class App extends Component {
    state = {
        isLegendShowed: false,
        isHeaderShowed:false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onHandleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onHandleScroll);
    }

    onHandleClick = () => {
        this.setState(prevState => ({
            isLegendShowed: !prevState.isLegendShowed
        }));
    };
    onHandleScroll=(e)=>{
        let element = e.target;
        console.log('Y offset= '+window.scrollY);
        if (window.scrollY>299){
            this.setState({isHeaderShowed: true});
        }else {
            this.setState({isHeaderShowed: false});
        }
    };

    render() {

        return (

            <div className="App" onScroll={this.onHandleScroll}>

                <head>
                    <title/>
                    <meta name="viewport" content="width=device-width"/>
                </head>
                {this.state.isHeaderShowed ?
                    (<div className={'FixedHeader'} >
                        <TableFixedHeader/>

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


                <div className='IntroBox'>

                    <svg className="Intro" viewBox="0 0 800 600">
                        <symbol id="s-text">
                            <text textAnchor={'middle'}
                                  x="50%"
                                  y="10%"
                                  className="text--line"
                            >
                                Схема
                            </text>
                            <text textAnchor={'middle'}
                                  x="50%"
                                  y="18%"
                                  className="text--line2"
                            >
                                Кауфмана-Уайта
                            </text>

                        </symbol>

                        <g className="g-ants">
                            <use xlinkHref="#s-text"
                                 className="text-copy"/>
                            <use xlinkHref="#s-text"
                                 className="text-copy"/>
                            <use xlinkHref="#s-text"
                                 className="text-copy"/>
                            <use xlinkHref="#s-text"
                                 className="text-copy"/>
                            <use xlinkHref="#s-text"
                                 className="text-copy"/>
                        </g>


                    </svg>
                </div>

                <div className={'TableLeft'}>

                    <Table onScroll={this.onHandleScroll}/>
                </div>

                {this.state.isLegendShowed ?
                    (<div className={'LegendRight'}>
                        <Legend/>
                    </div>) :
                    null
                }

            </div>
        );
    }
}

export default App;
