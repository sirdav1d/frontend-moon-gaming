import {
	CardListSearch,
	ContainerCardList,
	GenderList,
	GenderListContainer,
	GlobalStyle,
	InputHome,
	Lupa,
} from './styles';
import { games } from '../mocks/games';
import { genders } from '../mocks/genders';
import { useState } from 'react';
import Card from './Card';
import { matchByText } from '../helpers/utils';


const CardList = () => {
	const [gameFiltered, setGameFiltered] = useState(games);

	const fillByTitle = ({ target }: any) => {
		const lista = [...games].filter(({ title }) =>
			matchByText(title, target.value),
		);
		setGameFiltered(lista);
	};

	const fillByGender = (e:any)=>{
		e.stopPropagation()
		const id = e.target.id;
		const response = genders.map((gender) => gender.id === id);
		console.log({response});
		console.log(e.target.id)
	}

	

	return (
		<>
			<ContainerCardList>
				<CardListSearch>
					<InputHome
						onChange={fillByTitle}
						placeholder='Pesquisar Jogo'
					/>
					<Lupa />
				</CardListSearch>
				<GenderListContainer>
					{genders.map((gender: any) => (
						<GenderList
							onClick={fillByGender}
							id={gender.id}
							key={gender.id}>
							{gender.name}
						</GenderList>
					))}
				</GenderListContainer>
				{gameFiltered.map((game: any) => (
					<Card
						nome={game.title}
						key={game.id}
						score={game.imdb_score}
						image={game.cover_image_url}
					/>
				))}
			</ContainerCardList>
			<GlobalStyle />
		</>
	);
};

export default CardList;
