import React from 'react';
import './Legend.css';

class Legend extends React.Component {

    render() {
        return (
            <div className={'legend'}>
                <h1>
                    Легенда
                </h1>

                <p>Сальмонеллы вида S.enterica делятся на несколько подвидов и обозначаются следующими символами:<br/>

                    Подвид I - или название серовара для сероваров вида S.enterica подвида enterica.<br/>

                    Для представителей других подвидов вида S.enterica введены следующие обозначения:<br/>

                    Подвид II - для сероваров S.enterica subsp. salamae<br/>

                    Подвид IIIa - для сероваров S.enterica subsp. arizonae<br/>

                    Подвид IIIb - для сероваров S.enterica subsp. diarizonae<br/>

                    Подвид IV - для сероваров S.enterica subsp. houtenae<br/>

                    Подвид VI - для сероваров S.enterica subsp. indica<br/>

                    V - Вид S.bongori - для серовара S.bongori subsp. bongori. Все серовары вида S.bongori имеют символ
                    V.<br/>

                    Деление на подвиды имеет определенное эпидемиологическое значение так как основным, естественным
                    резервуаром сальмонелл подвидов 1 и 2 служат теплокровные животные, а для представителей остальных
                    подвидов (IIIa, IIIb, IV, VI и вида S.bongori (V) - хладнокровные животные и окружающая среда.
                    Определение и название подвидов не является обязательными в клинической микробиологической практике.
                    Необходимым для идентификации является только название серовара подвида enterica. В клинической
                    практике возможно использование двух вариантов названий:
                    <br/>
                    1. Salmonellа ser Typhimurium<br/>

                    2. Salmonellа Typhimurium<br/>

                    Серовары других подвидов вида S.enterica и вида S.bongori обозначаются номером подвида и их
                    антигенной формулой:<br/>

                    II - O 1, 6, 14 Н, e, n, x, z15.
                </p>

            </div>
        )
    }
}

export default Legend;