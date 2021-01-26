const viaCep = (valor, setField, field) =>{
	const {value} = valor.target

	const cep = value.replace(/[^0-9]/g, '')

	if(cep.length !== 8){
		return
	}else{
		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then(res => res.json())
			.then(data =>{
				//console.log(data)
				if (data.erro === true) {
					console.log("Erro");
				}else{
					setField({
					...field,
						bairro: data.bairro,
						logradouro: data.logradouro,
						endereco: data.logradouro,
						cidade: data.localidade,
						estado: data.uf,
					})
				}
			})
	}
}
export default viaCep
