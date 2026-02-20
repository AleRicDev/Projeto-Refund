//Seleciona os elementos do formulário.
const amount =  document.getElementById("amount")

amount.oninput = () => {
    //Obtém o valor atual do input e remove os caracteres não numéricos.
    let value = amount.value.replace(/\D/g, "")
    
    //Transforma o valor em centavos(Exemplo: 150/100 = 1;5 que é equivalente a 1,50.)
    value = Number(value) / 100
     
    //Atualiza o valor do Input.
    amount.value = formatCurrencyBRL(value)

}




function formatCurrencyBRL(value){
    // Formata o valor no padrão BRL(Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return value
}