import { littleOptions } from "../constants"

const LittleOptions = () => {
	return (
		<div className='little-options-container'>
			{littleOptions.map((option, i) => (

				<div key={i} className='option'>

					<img src={option.image} />

					{option.title}

				</div>

			))}
		</div>
	)
}

export default LittleOptions
