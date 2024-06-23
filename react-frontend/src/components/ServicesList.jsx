import '../styles/serviceslist.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { imageUrl } from '../utils/formatUrlImage';

export default function ServicesList() {

    const navigate = useNavigate();
    const [services, setServices] = useState([]);

    const handleEdit = (serviceId) => {
        navigate(`/dashboard/edit/${serviceId}`, { replace: true });
    };

    const handleDelete = async (serviceId) => {
        await axios.delete(`http://localhost:3000/services/${serviceId}`);
        setServices(services.filter( service => service.id !== serviceId));
    }

    useEffect(() => {
        const fetchServices = async () => {
            const response = await axios.get("http://localhost:3000/services")
            setServices(response.data)
        }
        fetchServices()
    }, [])

    console.log(services)

    return(
        <>
            <h1>Serviços</h1>
            <table className="table">
                <thead className="t-header">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {services?.map((service) =>(
                        <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.name}</td>
                            <td>R$ {service.preco}</td>
                            <td>
                                <img src={imageUrl(service.imagePath)} alt={service.name} style={{ width: '100px', height: '100px' }} />
                            </td>
                            <td className="actions">
                                <button onClick={() => handleEdit(service.id)}>Editar</button>
                                <button onClick={() => handleDelete(service.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}