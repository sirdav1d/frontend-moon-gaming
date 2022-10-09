import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {MdOutlineFavorite} from 'react-icons/md'
import { CardContainer, Overlay, ScoreCard } from './styles';

const Card = (props: any) => {

	function generateStars(score:number) {
		const stars = []
		for (let index = 0; index < score; index++) {
			stars.push(<AiFillStar key={stars.length}/>)
		}

		return stars
	}

	return (
		<CardContainer>
			<img
				src={props.image}
				alt='img'
			/>
			<Overlay>
				<button>
					<MdOutlineFavorite
						size={25}
						color={'#05F2E7'}
					/>
				</button>
				<div>
					<p>{props.nome}</p>
					<ScoreCard>
						IMDb:
						{generateStars(props.score)}
					</ScoreCard>
				</div>
			</Overlay>
		</CardContainer>
	);
};

export default Card;
