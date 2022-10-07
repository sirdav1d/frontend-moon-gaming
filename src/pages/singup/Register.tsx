import {
	ButtonPattern,
	ButtonBack,
	ContainerRegister,
	FormRegister,
	GlobalStyle,
	InputPattern,
	LabelPattern,
	Logo,
} from '../../components/styles';
import logo from '../../assets/imagens/logo-moon-gaming.svg';
import { useState } from 'react';
function Register() {
	const [fields, setfields] = useState({
		nome: '',
		email: '',
		cpf: '',
		senha: '',
		confirma: '',
	});

	const handleFields = (event: { target: { name: any; value: any } }) => {
		setfields({ ...fields, [event.target.name]: event.target.value });
	};

	return (
		<>
			<ContainerRegister>
				<Logo
					src={logo}
					alt='logo'
				/>

				<FormRegister>
					<LabelPattern>Nome:</LabelPattern>
					<InputPattern
						value={fields.nome}
						name='nome'
						onChange={handleFields}
						type='text'
						required></InputPattern>

					<LabelPattern>Email:</LabelPattern>
					<InputPattern
						name='email'
						value={fields.email}
						onChange={handleFields}
						type='email'
						required></InputPattern>

					<LabelPattern>CPF:</LabelPattern>
					<InputPattern
						name='cpf'
						value={fields.cpf}
						onChange={handleFields}
						type='text'
						required></InputPattern>

					<LabelPattern>Senha:</LabelPattern>
					<InputPattern
						name='senha'
						value={fields.senha}
						onChange={handleFields}
						autoComplete='off'
						type='password'
						required></InputPattern>

					<LabelPattern>Confirmar Senha:</LabelPattern>
					<InputPattern
						name='confirma'
						value={fields.confirma}
						onChange={handleFields}
						type='password'
						required></InputPattern>

					<div className='btn-group'>
						<ButtonPattern
							href='/thanks'
							type='button'>
							ENVIAR{' '}
						</ButtonPattern>
						<ButtonBack
							href='/login'
							type='button'>
							VOLTAR
						</ButtonBack>
					</div>
				</FormRegister>
			</ContainerRegister>

			<GlobalStyle />
		</>
	);
}

export default Register;
