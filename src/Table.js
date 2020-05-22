import React, {Component} from 'react';
import './Table.css';
import Data from './Data';
import "react-table/react-table.css";


let temp = '';
let temppreviousrome = '';
let i = 0;
const RomeNums = {
    'I': true,
    'II': true,
    'III': true,
    'IIIa': true,
    'IIIb': true,
    'IV': true,
    'V': true,
    'VI': true,
    'VII': true,
    'VIII': true,
    'IX': true,
    'X': true,
};


function searchRome(string) {

    if (RomeNums[string]) {
        i++;
        if (i > 1) {
            return temppreviousrome + ' ' + string;
        } else {
            temppreviousrome = temp;
            return temp + ' ' + string;
        }

    } else {
        i = 0;
        return string
    }
}

const data = Data.map(function (elem) {
    let arr = [
        searchRome(elem[0]),
        elem[1].split(','),
        elem[2].split(','),
        elem[3].split(','),
    ];
    temp = searchRome(elem[0]);
    return arr
});

window.data = data
console.log(data)

class Table extends Component {

    state = {};

    render() {
        const PopularSalmonel = ['Nitra', 'Hessarek'];


        const {filter1, filter2, filter3, filter4, filter5, filter6} = this.state;

        let filter1Parts = filter1 && filter1.split(/[,\s;]+/);
        let filter2Parts = filter2 && filter2.split(/[,\s;]+/);
        let filter3Parts = filter3 && filter3.split(/[,\s;]+/);
        let filter4Parts = filter4 && filter4.split(/[,\s;]+/);
        let filter5Parts = filter5 && filter5.split(/[,\s;]+/);
        let filter6Parts = filter6 && filter6.split(/[,\s;]+/);

        //const filters1 = filter1Parts && filter1Parts.map(it => new RegExp(`^((${it})|(\\[${it}\\]))$`));

        const filters1 = filter1Parts && filter1Parts.map(it => new RegExp(`^((${it})|(\\[${it}\\])|(${it}\\])|(\\[${it}))$`));

        //filters1 && filters1.forEach(it=>console.log(it))
        //filter1Parts && filter1Parts.forEach(it=>console.log(it))
        let filterBy1 = it => !filter1 || filters1.every(pattern => it[1].some(item => pattern.test(item)))
        /*
         let filterBy1 = it => !filter1 || filter1Parts.every(filterPart =>
             it[1].some(item => item===filterPart) ||
             it[1].some(item => item.indexOf('[' + filterPart+ ']') !== -1) ||
             it[1].some(item => item===('[' + filterPart+',')) ||
             it[1].some(item=> item===(filterPart+']'))||
             it[1].some(item => item.indexOf('(' + filterPart+ ')') !== -1) ||
             it[1].some(item => item===(filterPart+')')) ||
             it[1].some(item => item===('(' +filterPart) ));
*/
        let filterBy2 = it => !filter2 || filter2Parts.every(filterPart =>
            it[2].some(item => item === filterPart) ||
            it[2].some(item => item.indexOf('[' + filterPart + ']') !== -1) ||
            it[2].some(item => item === ('[' + filterPart + ',')) ||
            it[2].some(item => item === (filterPart + ']')) ||
            it[2].some(item => item.indexOf('(' + filterPart + ')') !== -1) ||
            it[2].some(item => item === (filterPart + ')')) ||
            it[2].some(item => item === ('(' + filterPart)));

        let filterBy3 = it => !filter3 || filter3Parts.every(filterPart =>
            it[3].some(item => item === filterPart) ||
            it[3].some(item => item.indexOf('[' + filterPart + ']') !== -1) ||
            it[3].some(item => item === ('[' + filterPart)) ||
            it[3].some(item => item === (filterPart + ']')) ||
            it[3].some(item => item.indexOf('(' + filterPart + ')') !== -1) ||
            it[3].some(item => item === (filterPart + ')')) ||
            it[3].some(item => item === ('(' + filterPart)));

        let filterBy4 = it => !filter4 || !filter4Parts.some(filterPart =>
            it[1].some(item => item === filterPart)
        );

        let filterBy5 = it => !filter5 || !filter5Parts.some(filterPart =>
            it[2].some(item => item === filterPart)
        );

        let filterBy6 = it => !filter6 || !filter6Parts.some(filterPart =>
            it[3].some(item => item === filterPart)
        );

        const filteredData = data.filter(it => filterBy1(it) && filterBy2(it) && filterBy3(it) && filterBy4(it) && filterBy5(it) && filterBy6(it));
        /*
                if(true){
                    return <ReactTable
                        data={filteredData}
                        columns={[
                            {
                                Header: "Name",
                                columns: [
                                    {
                                        Header: "Name",
                                        id: "name",
                                        accessor: (d=>d[0])
                                    },
                                    {
                                        Header: "Last Name",
                                        id: "2",
                                        accessor: (it => it[1].join(', '))
                                    },
                                    {
                                        Header: "Last Name",
                                        id: "3",
                                        accessor: (it => it[2].join(', '))
                                    },
                                    {
                                        Header: "Last Name",
                                        id: "4",
                                        accessor: (it => it[3].join(', '))
                                    }
                                ]
                            }
                        ]}
                         defaultPageSize={filteredData.length}
                        style={{
                            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        className="-striped -highlight"
                    />
                }
        */
        return (
            <table className="table">
                <thead className={'thead'}>
                <tr className={'HeaderFixed'}>
                    <th className={'header'}>
                        Серовар
                    </th>
                    <th className={'header'}>Соматические
                        O антигены
                    </th>
                    <th className={'header'}>Жгутиковые H антигены (Фаза 1)
                    </th>
                    <th className={'header'}>Жгутиковые H антигены (Фаза 2)
                    </th>
                </tr>
                <tr className={'tr'}>
                    <th className={'th'}>
                        Что нужно оставить
                    </th>
                    <th className={'th'}>
                        <input className={'text1'} type="text" onChange={e => {
                            this.setState({filter1: e.target.value.trim()})
                        }}/>
                    </th>
                    <th className={'th'}>
                        <input className={'text1'} type="text" onChange={e => {
                            this.setState({filter2: e.target.value.trim()})
                        }}/>
                    </th>
                    <th className={'th'}>
                        <input className={'text1'} type="text" onChange={e => {
                            this.setState({filter3: e.target.value.trim()})
                        }}/>
                    </th>
                </tr>
                <tr className={'tr'}>
                    <th className={'th'}>
                        Что нужно удалить
                    </th>
                    <th className={'th'}>
                        <input className={'text2'} type="text" onChange={e => {
                            this.setState({filter4: e.target.value.trim()})
                        }}/>
                    </th>
                    <th className={'th'}>
                        <input className={'text2'} type="text" onChange={e => {
                            this.setState({filter5: e.target.value.trim()})
                        }}/>
                    </th>
                    <th className={'th'}>
                        <input className={'text2'} type="text" onChange={e => {
                            this.setState({filter6: e.target.value.trim()})
                        }}/>
                    </th>
                </tr>
                </thead>
                <tbody className={'tbody'}>
                {filteredData.map(it => <tr>
                    {(PopularSalmonel.indexOf(it[0]) === -1) ?
                        <td className={'td'}>{it[0]}</td> :
                        <td className={'highlight'}>{it[0]}</td>
                    }


                    <td>{it[1].join(', ')}</td>
                    <td>{it[2].join(', ')}</td>
                    <td>{it[3].join(', ')}</td>
                </tr>)}
                </tbody>
            </table>
        )
    }
}

export default Table;

