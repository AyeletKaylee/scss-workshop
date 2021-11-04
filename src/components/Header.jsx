import clsx from 'clsx';
import React, { useState } from 'react'
import { Button } from '.';
import { navigationRoutes } from '../constants';


const Header = () => {

	const [selectedRoute, setSelectedRoute] = useState(navigationRoutes[0].path);

	return (
		<div className="heading">

			<div id='header-logo-wrapper'>
				<img id='logo' src='https://www.geoguessr.com/_next/static/images/logo-dd3c3286e6d14f72653800dbdf5340a0.svg' />
			</div>

			<div className='navigation'>
				{navigationRoutes.map(route => (
					<div
						key={route.path}
						onClick={() => setSelectedRoute(route.path)}
						className={clsx('navigation-option', route.path === selectedRoute && 'current-tab')}
					>
						{route.title}
					</div>
				))}
			</div>

			<div className="auth-options">
				<Button>sign up</Button>
				<Button white>log in</Button>
			</div>
		</div>
	)
}

export default Header;