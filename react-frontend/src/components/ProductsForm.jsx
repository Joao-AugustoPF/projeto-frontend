import { useEffect, useState } from 'react'
import '../styles/products-form.css'
import ProductsList from './ProductsList'
import axios from 'axios'

const ProductsForm = () => {
    const [id, setId] = useState(1)
    const [name, setName] = useState('')
    const [preco, setPreco] = useState(null)
    const [estoque, setEstoque] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [imagePath, setImagePath] = useState('')
    const [products, setProducts] = useState([])
    const [edit, setEdit] = useState(false)

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]) 
    }

    const handleUploadChange = async () => {
        if(!selectedFile) {
            alert("Selecione um arquivo!")
        }

        const formData = new FormData()
        formData.append("image", selectedFile)

        try {
            const response = await axios.post("http://localhost:3001/upload", formData)
            setImagePath(response.data.path)
        } catch (error) {
            console.log(error)
        }
    }

    const clearValues = () => {
        setEstoque('')
        setPreco('')
        setName('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!edit) {
            setId(v => v + 1)
            setProducts([...products, {id, name, preco, estoque, imagePath}])

            const newProduct = {
                name: name,
                preco: preco,
                estoque: estoque,
                imagePath: imagePath
              };
            handleUploadChange()
            axios.post("http://localhost:3000/products", newProduct)
        }

        if(edit) {
            const productIndex = products.findIndex(prod => prod.id === id)
            products[productIndex] = {id, name, preco, estoque}
            
            setProducts(products)
            setEdit(false)
        }
        clearValues()
    }

    const handleDelete = (productId) => {
        setProducts(currentProducts => currentProducts.filter(product => product.id !== productId));
    }

    const handleEdit = (productId) => {
        const product = products.find(prod => prod.id === productId)
        setId(product.id)
        setName(product.name)
        setEstoque(product.estoque)
        setPreco(product.preco)
        setEdit(true)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const produtos = await axios.get("http://localhost:3000/products")
            console.log(produtos)
            setProducts(produtos.data)
        }
        fetchProducts()
    }, [])

    return (
    <>


        <ProductsList onDelete={handleDelete} onEdit={handleEdit} products={products}/>
        

        <div>

        </div>

        <div className="container">
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={handleSubmit} action="#" method="post">
                <label htmlFor="nome">Nome:</label>
                <input type="text" value={name} name="nome" onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="preco">Preço:</label>
                <input type="number" value={preco} name="preco" onChange={(e) => setPreco(e.target.value)}  required />
                <input type="file" onChange={handleFileChange}/>
                <label htmlFor="estoque">Estoque:</label>
                <input type="number" name="estoque" value={estoque} onChange={(e) => setEstoque(e.target.value)} required />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    </>
    )
}

export default ProductsForm