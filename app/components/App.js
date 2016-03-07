import React from 'react'
import Constants from '../Constants';
import Moment from 'moment';

export default React.createClass({

	render () {		

        let perDay = this.props.items.map((day, index) => {

            const dayDate = Moment.unix(day.dt).calendar(null, {
			    sameDay: '[Today]',
			    nextDay: '[Tomorrow]',
			    nextWeek: 'dddd',
			    sameElse: 'DD/MM/YYYY'
			});

			const desc = day.weather.map((desc) => desc.description);
			const temp = Math.round(day.temp.day);
			const isToday = index === 0 ? true : false;

			let cls = `day ${isToday ? 'today' : ''}`;
            
            return (
                <div key={day.dt} className={cls}>
                	<p className="tmp">{temp}˚<span className="weekday">{dayDate}</span></p>
                	<p className="desc">{desc}</p>
                </div>
            );
        });

    	return (
    		<div className="container">
                <h3>{this.props.city}</h3>
                {perDay}
    		</div>
    	);
	}
});
