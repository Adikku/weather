import Constants from './Constants';
import Ajax from 'ajax';

export default {
	fetchItems () {
		return function (dispatch, getState) {
			Ajax.get('http://openweathermap.org/data/2.5/forecast/daily?id=2692965&APPID=e547eb8caa16e33680daa5c43f17c0af&units=metric&cnt=6', null, function(res) {
				dispatch({
					type: Constants.RECEIVE_DATA_ITEMS,
					city: res.city.name,
					data: res.list
				})
			});
		}
	}
}

