import React, { Component } from "react";

class StorageManager extends Component {
	render() {
		return (
			<div className="mw8 center">
				<h2 className="tc center f2">{this.props.title}</h2>
				<p className="tc center strong bb b--black-10 mw8 mb4" style={{ fontSize: "1.2em" }}>
					{this.props.description}
				</p>
				<p className="paragraph">
					Um jeito mais simples de manipular seus dados no browser, sem choro. É essa a ideia principal dessa pequena em
					Typescript. Comecei com esse código porque tive problemas em manipular Cookies em um determinado projeto, o
					retorno de document.cookie é uma string com tudo que precisamos, fica ruim organizar as coisas, objetos são
					bem melhores. E assim foi feito, trabalhar passando objetos, sem precisar converter para string na hora de
					armazenar.
				</p>
				<pre className="center tc mt4 mb4">
					<code className="bg-black material-green pa3">$ npm install --save storage-manager-js</code>
				</pre>
				<p className="paragraph">
					Com a ajuda do StorageManager, você conseguirá através de simples métodos, fazer toda a gerência do seu
					LocalStorage, SessionStorage e com Cookies, tendo ainda um único objeto para manipular os 3, podendo alternar
					bem quando quiser com o método <i>change</i>. Vamos dar uma olhada no funcionamento dos métodos e quais são:
				</p>
				<p className="paragraph">
					Há 3 tipos de Storage, cada um sendo identificado por duas maneiras, a preguiçosa e a verbosa.
					<ul>
						<li>Cookie ou C</li>
						<li>LocalStorage ou L</li>
						<li>SessionStorage ou S</li>
					</ul>
					E não se preocupe, é case insensitive, então aconselho fortemente a escrever da forma que mais lhe convir
				</p>
				<ul>
					<li style={{ fontSize: "1.3em" }}>
						<strong>get, cat, item, getItem:</strong> O get() já entrega o que estes métodos fazem, eles retornam o
						valor da chave salva do seu objeto. Se você salvar um objeto, ele será retornado exatamente da mesma forma
						como foi salvo, o mesmo para Arrays (mesmo que Cookies, LocalStorage e SessionStorage não permitam isso).
					</li>
					<li style={{ fontSize: "1.3em" }}>
						<strong>set, touch, setItem:</strong> Como todos já estão acostumados, o set() é o método de inserção dos
						valores, para usa-lo, basta passar a chave e o valor, ficando{" "}
						<strong>set('pessoa', {"{...pessoa}"})</strong>. Não se preocupe em converter, só passe os valores e deixa
						que a biblioteca faz o serviço sujo, ela foi feita pra isso afinal de contas.
					</li>
					<li style={{ fontSize: "1.3em" }}>
						<strong>json, all:</strong> Esse é simples, ele retorna todos os objetos do Storage atual, com a chave e o
						valor de cada. Sem mais.
					</li>
					<li style={{ fontSize: "1.3em" }}>
						<strong>unset, rm, delete, remove:</strong> Esse fica ainda mais tranquilo de se saber pelo nome, passa a
						chave e <strong>undefined</strong>
						...A chave perde seu valor ou você deletou aquele item, entenda como fizer mais sentido.
					</li>
					<li style={{ fontSize: "1.3em" }}>
						<strong>change:</strong> Troca o controle para outro Storage definido. Para saber sobre os storages, dê uma
						olhada acima.
					</li>
					<li style={{ fontSize: "1.3em" }}>
						<strong>clearAll, purge:</strong> Esses métodos fazem a limpa em todos os 3 Storages, literalmente passa o
						carro e não há como recuperar os dados do cache mantido pelo StorageManager
					</li>
				</ul>
			</div>
		);
	}
}

export default StorageManager;
