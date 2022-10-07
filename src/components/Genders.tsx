import React from 'react'
import { GenderList } from './styles';
const GenderContent = (props: any) => {
  return (
		<>
			<GenderList>
                {props.nome}
            </GenderList>
		</>
	);
}

export default GenderContent;