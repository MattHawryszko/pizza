import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Index from './scenes/index';
import Menu from './scenes/menu';
import Jobs from './scenes/jobs';
import Gallery from './scenes/gallery';
import Reservation from './scenes/reservation';
import NoMatch from './components/nomatch';





export default () => {

	
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Index} />
							<Route exact={true} path="/menu" component={Menu} />
							<Route exact={true} path="/jobs" component={Jobs} />
							<Route exact={true} path="/gallery" component={Gallery} />
							<Route exact={true} path="/reservations" component={Reservation} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</div>
				</BrowserRouter>
				
			</div>
		
		);
	};
