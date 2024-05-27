import './products-list.css'
 
export default function ProductsList ({products, onDelete, onEdit}) {




   return (
       <>
           <table className='table'>
               <thead className="t-header">
                   <th>ID</th>
                   <th>Nome</th>
                   <th>Preço</th>
                   <th>Estoque</th>
                   <th>Ações</th>
               </thead>
               <tbody>
                       {products.map((product, index) => (
                           <>
                   <tr >
                           <td>{product.id}</td>
                           <td>{product.name}</td>
                           <td>R$ {product.preco}</td>
                           <td>{product.estoque}</td>
                           <td class="actions">
                               <button onClick={() => onEdit(product.id)}>Editar</button>
                               <button onClick={() => onDelete(product.id)}>Excluir</button>
                           </td>
                   </tr>
                           </>
                       ))}
               </tbody>
           </table>
       </>
   )
}