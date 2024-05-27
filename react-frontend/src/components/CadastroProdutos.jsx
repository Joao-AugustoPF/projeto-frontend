import ProductsForm from "./ProductsForm"
import ProductsList from "./ProductsList"

const CadastroProdutos = () => {

    const products = [{
        id: "1",
        nome: "Produto 1",
        preco: "R$4,00",
        estoque: "5"
      }, 
      {
        id: "2",
        nome: "Produto 2",
        preco: "R$9,00",
        estoque: "5"
      }, 
      {
        id: "3",
        nome: "Produto 3",
        preco: "R$10,00",
        estoque: "10"
      }, 
      {
        id: "4",
        nome: "Produto 4",
        preco: "R$5,00",
        estoque: "5"
      }
    ]

    return (
        <div>
            <h1>Cadastro de Produtos</h1>
            <ProductsForm />
        </div>
    )
}

export default CadastroProdutos