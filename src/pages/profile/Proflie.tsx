import { GlobalStyle } from '../../components/styles';
import React from 'react';
import { ContainerProfile, HeaderProfile, ProfileContent, ProfileLogo } from './style';
import logo from '../../assets/imagens/logo-moon-gaming.svg';
import { FiLogOut } from 'react-icons/fi';
import {GoPlus} from 'react-icons/go'
import ProfileCard from './ProfileCard';
import { Profiles } from '../../mocks/profiles';

const Proflie = () => {
    

    function handleClick(e: any) {
			e.stopProagation();
		}
	return (
		<>
			<ContainerProfile>
				<HeaderProfile>
					<ProfileLogo
						src={logo}
						alt='logo'
					/>
					<div>
						<button type='button'>
							<GoPlus size={25} />
						</button>
						<a href='/login'>
							<FiLogOut size={25} />
						</a>
					</div>
				</HeaderProfile>
				<ProfileContent>
					{Profiles.map((profile: any) => (
						<ProfileCard
							name={profile.title}
							image={profile.image_url}
                            key={profile.id}
						/>
					))}
				</ProfileContent>
			</ContainerProfile>
			<GlobalStyle />
		</>
	);
};

export default Proflie;
