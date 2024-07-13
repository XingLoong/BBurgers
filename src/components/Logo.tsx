import storeLogo from '../images/Logo.png';

function Logo() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<img src={storeLogo}></img>
		</div>
	);
}

export default Logo;
