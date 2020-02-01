import React from 'react';
import { Icon, Notification } from 'rsuite';
import './index.css';


class Clock extends React.Component {

    state = {
        year : 2020,
        yearZ : 2020,
        M_month : '',
        month : 1,
        day : 1,
        week : 1,
        hour : 12,
        minute : 1,
        second : 1,
        Zodiac : 'Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces'.split(','),
        M_months : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],
    }

    componentWillMount() {
        setInterval(() => {
            let time = new Date();
            this.setState({
                year : time.getUTCFullYear(),
                yearZ : this.state.Zodiac[time.getUTCFullYear()%12],
                M_month : this.state.M_months[ time.getUTCMonth() ],
                month : time.getMonth() + 1 ,
                day : time.getDate(),
                week : time.getDay(),
                hour : time.getHours(),
                minute : time.getMinutes(),
                second : time.getSeconds(),
             })
        }, 1000);
    }

    array = length => Array.from({ length })
        .map( (v , k) => k )
        .map( x => x+1 );

    addPreZeros = num => {
        if (num >= 10) return num;
        return '0' + num; 
    }
    

    render() {

        const { year , yearZ,  M_month, month, day, week, 
        hour, minute, second } = this.state;

        return (
             <div className = 'app' >
                 <header className = 'app-header' >
                    <div className = 'msg' >
                        <div className = 'year' >
                                <span>
                                    {yearZ} 
                                </span>/Year
                        </div>
                    </div>
                    <div className = 'M_month' >
                        { `${M_month}` }
                    </div>
                    <div className = 'box' >
                        { this.array(12).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` month item ${index === (month-1) ? 
                                ' active ' : ' '  }` } 
                               style={{transform: `rotate(${index*30-30*(this.state.month-1)}deg)`}} >
                                        { ` ${x} month ` }
                                </div>
                            )
                        } ) }

                        { this.array(30).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` day item ${index === (day-1) ? 
                                ' active ' : ' '  }` } 
                                style={{transform: `rotate(${index*12-12*(this.state.day-1)}deg)`}} 
                                 >
                                        { ` ${x} day ` }
                                </div>
                            )
                        } ) }

                        { this.array(7).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` week item ${index === (week-1) ? 
                                ' active ' : ' '  }` } 
                                style={{transform: `rotate(${index*(360/21)-(360/21)*(this.state.week-1)}deg)`}}  >
                                        { ` week  ${x}  ` }
                                </div>
                            )
                        } ) }

                         { this.array(24).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` hour item ${index === (hour-1) ? 
                                ' active ' : ' '  }` } 
                                style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}  >
                                        { ` ${x} hr ` }
                                </div>
                            )
                        } ) }

                         { this.array(60).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` minute item ${index === (minute-1) ? 
                                ' active ' : ' '  }` } 
                                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.minute-1)}deg)`}} 
                                >
                                
                                { ` ${x} min ` }

                                
                                </div>
                            )
                        } ) }



                         { this.array(60).map( ( x, index ) => {
                            return (
                                <div key = {index} 
                                className = { ` second item ${index === (second-1) ? 
                                ' active ' : ' '  }` } 
                                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.second-1)}deg)`}}   >
                                        { ` ${x} sec ` }
                                </div>
                            )
                        } ) }
                        
                    </div>

                     <Icon onClick = {
                        () => {
                                Notification.info({
                                    title: 'Information for today',
                                    duration: 20000,
                                    description: (
                                        <span style = {{ marginTop : 10, fontSize : 16 }} >
                                            Today date is : {day} / {M_month} / {year}
                                            <br/>
                                            <br/>
                                            Today time is : {hour}hr - {minute}min
                                            
                                        </span>
                                        
                                        
                                    )

                                });
                                }
                    }
                    icon="play2" 
                    style = {{ position : 'absolute', top : '48.7%', left : '49.8%', color : 'white'  }} /> 
                    <Icon icon="long-arrow-left"  size="1x"
                    style = {{ position : 'absolute', top : '48.8%', left : '92%', color : 'white' }} />
                 </header>
             </div>
        );
    }
}

export default Clock;

