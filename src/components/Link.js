import React from 'react';


const Link = (props) => {
		
		if (props.img) {
			return (
				<a href={props.link}>
					<img src={props.img} alt="link-img" className="link-img"/>
					{props.text} 
				</a>
			)
		} else {
			return (
				<a href={props.link}> 
					{props.text}
				</a>
			)
		}
}

export default Link