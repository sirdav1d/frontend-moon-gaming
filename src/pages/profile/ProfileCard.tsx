import React from 'react'
import { ContainerProfileCard } from './style';

const ProfileCard = (props: any) => {
  return (
		<ContainerProfileCard>
			<a href='/'>
				<img
					src={props.image}
					alt={props.name}
				/>
				<p>{props.name}</p>
			</a>
		</ContainerProfileCard>
	);
}

export default ProfileCard;