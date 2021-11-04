import clsx from "clsx";

interface ButtonProps {
	white?: Boolean;
	onClick?: () => Promise<void>;
}

const Button: React.FC<ButtonProps> = ({ white = false, onClick, children }) => {
	return (
		<span className='generic-button-container'>
			<div className={clsx('green-generic-button', white && 'white-button')} onClick={onClick}>
				{children}
			</div>
		</span>
	)
}

export default Button;