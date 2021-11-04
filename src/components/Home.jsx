import React from 'react'

import { cardInfo } from '../constants';

import LittleOptions from './LittleOptions';
import Card from './Card'


const Home = () => {
	return (
		<div className='home'>
			<div className='ad'></div>

			<div className="big-options">
				{cardInfo.map((card, i) => <Card
					key={i}
					yellowText={card.subtitle}
					whiteText={card.title}
					backgroundImage={card.backgroundImage}
					cardContainerClass={card.cardContainerClass}
				/>)}
			</div>

			<hr />

			<LittleOptions />

			<hr />



		</div>
	)
}

export default Home
