import React, {Component} from 'react';
import './TableFixedHeader.css';

class TableFixedHeader extends React.Component{
    render() {
        return(
            <table className="TableHeader">
                <thead >
                <tr >
                    <th className={'header1'}>
                        Серовар
                    </th>

                    <th className={'header2'}>Соматические
                        O антигены
                    </th>
                    <th className={'header3'}>Жгутиковые H антигены (Фаза 1)
                    </th>
                    <th className={'header4'}>Жгутиковые H антигены (Фаза 2)
                    </th>

                </tr>
                </thead>
            </table>
        )
    }
}

export default TableFixedHeader;