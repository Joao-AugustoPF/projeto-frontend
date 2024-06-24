import '../styles/servicesform.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { imageUrl } from '../utils/formatUrlImage';

const ServicesForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');
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
            return response.data.path
        } catch (error) {
            console.log(error);
        }
        
    }

    const clearValues = () => {
        setPreco('');
        setName('');
        setSelectedFile(null);
        setImagePath('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let imagePathTemp = imagePath

        if (selectedFile) {
            imagePathTemp = await handleUploadChange();
        }

        if(!edit) {
            
            const newService = {
                name: name,
                preco: preco,
                imagePath: imagePathTemp
            };

            await axios.post("http://localhost:3000/services", newService)
        } else {
            const updatedService = {
                name: name,
                preco: preco,
                imagePath: imagePathTemp
            };

            await axios.put(`http://localhost:3000/services/${id}`, updatedService)
        }

        clearValues();
        setSubmitted(true);

    };

    useEffect(() => {
        if (id) {
            const fetchServices = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/services/${id}`);
                    const service = response.data;
                    setName(service.name);
                    setPreco(service.preco);
                    setImagePath(service.imagePath);
                    setEdit(true);
                } catch (error) {
                    if (error.response && error.response.status === 404) {
                        navigate('/dashboard/listagem/servicos');
                      } else {
                        console.error('Erro ao buscar o produto:', error);
                      }
                }
            }
            fetchServices()
        }
    }, [id, navigate]);

    useEffect(() => { if (submitted) { navigate("/dashboard/listagem/servicos", { replace: true } ) } }, [submitted, navigate] );

    return (
        <>
            <h1>{ edit ? "Edição de serviço" : "Cadastro de Serviços" }</h1>
            <div className="container">
                <form onSubmit={handleSubmit} action="#" method="post">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={name} name="nome" onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="preco">Preço:</label>
                    <input type="number" value={preco} name="preco" onChange={(e) => setPreco(e.target.value)} required />
                    {edit && (
                        <div>
                            <img style={{ width: '100px', height: '100px' }} alt={name} src={imageUrl(imagePath)}></img>
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    <input type="submit" value={edit ? "Salvar Alterações" : "Cadastrar"} />
                </form>
            </div>
        </>
    );
}

export default ServicesForm