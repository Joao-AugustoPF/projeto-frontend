import { useEffect, useState } from 'react'
import '../styles/products-form.css'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { imageUrl } from '../utils/formatUrlImage'

const ProductsForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePath, setImagePath] = useState('');
    const [edit, setEdit] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    
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
            const response = await axios.post("http://localhost:3001/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setImagePath(response.data.path);
            return response.data.path;
        } catch (error) {
            console.log(error);
        }
    };

    const clearValues = () => {
        setEstoque('');
        setPreco('');
        setName('');
        setSelectedFile(null);
        setImagePath('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        let imagePathTemp = imagePath;
        if (selectedFile){
            imagePathTemp = await handleUploadChange();
        }

        if(!edit) {

            const newProduct = {
                name: name,
                preco: preco,
                estoque: estoque,
                imagePath: imagePathTemp
              };

            await axios.post("http://localhost:3000/products", newProduct)
        } else {
            
            const updatedProduct = {
                name: name,
                preco: preco,
                estoque: estoque,
                imagePath: imagePathTemp
            };

            await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
        }
    
        clearValues();
        setSubmitted(true);

        };

        useEffect(() => {
            if (id) {
              const fetchProducts = async () => {
                try {
                  const response = await axios.get(`http://localhost:3000/products/${id}`);
                  const product = response.data;
        
                  setName(product.name);
                  setPreco(product.preco);
                  setEstoque(product.estoque);
                  setImagePath(product.imagePath);
                  setEdit(true);
                } catch (error) {
                  if (error.response && error.response.status === 404) {
                    navigate('/dashboard/listagem/produtos');
                  } else {
                    console.error('Erro ao buscar o produto:', error);
                  }
                }
              };
        
              fetchProducts();
            }
          }, [id, navigate]);

        useEffect(() => { if (submitted) { navigate("/dashboard/listagem/produtos", { replace: true } ) } }, [submitted, navigate] );
    
    return (
    <>  
        <h1>{edit ? "Edição de produto" : "Cadastro de Produtos"}</h1>
        <div className="container">
            <form onSubmit={handleSubmit} action="#" method="post">
                <label htmlFor="nome">Nome:</label>
                <input type="text" value={name} name="nome" onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="preco">Preço:</label>
                <input type="number" value={preco} name="preco" onChange={(e) => setPreco(e.target.value)}  required />
                {edit && (
                    <div>
                        <img style={{ width: '100px', height: '100px' }} alt={name} src={imageUrl(imagePath)}></img>
                    </div>
                )}
                <input type="file" accept="image/*" onChange={handleFileChange}/>
                <label htmlFor="estoque">Estoque:</label>
                <input type="number" name="estoque" value={estoque} onChange={(e) => setEstoque(e.target.value)} required />
                <input type="submit" value={edit ? "Salvar Alterações" : "Cadastrar"} />
            </form>
        </div>
    </>
    )
}

export default ProductsForm