import * as React from 'react';
import "../styles/style.css"
import * as moment from "moment";
import 'moment/locale/pt-br';

class Anuncio extends React.PureComponent{

    render() {
        return(
            <div className={"date"}>
                {moment().format('Do MMMM YYYY')}
                <br/>
                {moment().format('h:mm:ss a')}
            </div>
        )
    }
}

export default Anuncio;