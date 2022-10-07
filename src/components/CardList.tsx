import {
	CardListSearch,
	ContainerCardList,
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
import GenderContent from './Genders';

const CardList = () => {
	const [gameFiltered, setGameFiltered] = useState(games);

	const fillByTitle = ({ target }: any) => {
		const lista = [...games].filter(({ title }) =>
			matchByText(title, target.value),
		);
		setGameFiltered(lista);
	};

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
						<GenderContent
							nome={gender.name}
							key={gender.id}
						/>
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
