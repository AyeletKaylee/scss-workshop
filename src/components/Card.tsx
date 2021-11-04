import clsx from "clsx"

interface CardProps {
	yellowText: string;
	whiteText: string;
	backgroundImage: string;
	cardContainerClass: string;
}

const Card: React.FC<CardProps> = ({ yellowText, whiteText, backgroundImage, cardContainerClass }) => {
	return (
		<div className={clsx(cardContainerClass, 'card-container')} style={{ /* '--background-image' */backgroundImage: `url(${backgroundImage})` }}>
			<div className="yellow-text">{yellowText}</div>
			<div className="white-text">{whiteText}</div>

		</div>
	)
}

export default Card;
