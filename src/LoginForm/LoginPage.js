import React from "react";
import "./LoginPage.css"; // Importa o arquivo CSS para estilização

const LoginPage = () => {
	return (
		<div className="login-page">
			<header className="login-header">
				<img src="/public/logo.png" alt="Clin Plus Logo" className="logo" />
			</header>
			<main className="login-main">
				<section className="login-info">
					<h1>AGENDAMENTO</h1>
					<h1>CONTROLE</h1>
					<h1>COMUNICAÇÃO</h1>
					<h1>RECEITAS</h1>
					<h1>PARECERES</h1>
					<div className="login-image">
						<img src="/public/doctor-male.png" alt="Doctor Male" />
						<img src="/public/doctor-female.png" alt="Doctor Female" />
					</div>
				</section>
				<section className="login-form">
					<form>
						<h2>Clin Plus</h2>
						<input
							type="text"
							placeholder="Nome do usuário ou e-mail"
							required
						/>
						<input type="password" placeholder="Senha" required />
						<button type="submit">Entrar</button>
						<div className="login-options">
							<span>OU</span>
							<button className="google-login">Entrar com Google</button>
						</div>
						<div className="login-links">
							<a href="#">Não tem uma conta? Cadastre-se</a>
						</div>
					</form>
				</section>
			</main>
			<footer className="login-footer">
				<p>TUDO EM UM ÚNICO LUGAR</p>
			</footer>
		</div>
	);
};

export default LoginPage;
