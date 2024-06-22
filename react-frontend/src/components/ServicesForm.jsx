import '../styles/servicesform.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ServicesForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [preco, setPreco] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePath, setImagePath] = useState('');
    const [edit, setEdit] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        
        if (id) {
            const fetchServices = async () => {
                const response = await axios.get(`http://localhost:3000/services/${id}`);
                const service = response.data;
                setName(service.name);
                setPreco(service.preco);
                setImagePath(service.imagePath);
                setEdit(true);
            }
            fetchServices()
        }
    }, [id]);

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
            const response = await axios.post("http://localhost:3000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setImagePath(response.data.path);
            return response.data.path
        } catch (error) {
            console.log(error);
        };
        
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

        if(!edit) {
            if (selectedFile) {
                imagePathTemp = await handleUploadChange();
            }

            const newService = {
                name: name,
                preco: preco,
                imagePath: imagePathTemp
            };

            await axios.post("http>//localhost:3000/services", newService)
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

    useEffect(() => { if (submitted) { navigate("/dashboard/listagem/services", { replace: true } ) }; }, [submitted, navigate] );

    return (
        <>
            <h1>{ edit ? "Edição de serviço" : "Cadastro de Serviços" }</h1>
            <div className="container">
                <form onSubmit={handleSubmit} action="#" method="post">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" value={name} name="nome" onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="preco">Preço:</label>
                    <input type="number" value={preco} name="preco" onChange={(e) => setPreco(e.target.value)} required />
                    <input type="file" onChange={handleFileChange} />
                    <input type="submit" value={edit ? "Salvar Alterações" : "Cadastrar"} />
                </form>
            </div>
        </>
    );
}

export default ServicesForm