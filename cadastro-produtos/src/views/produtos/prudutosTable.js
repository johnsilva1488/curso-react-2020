import React from 'react'

export default (props) => (
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sku</th>
                <th>Preço</th>
                <th>Fornecedor</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {props.produtos.map((produto, index) => {
                return (
                    <tr key={index}>
                        <td>{produto.nome}</td>
                        <td>{produto.sku}</td>
                        <td>{produto.preco}</td>
                        <td>{produto.fornecedor}</td>
                        <td className="w-10">
                            <button onClick={() => props.editarAction(produto.sku)} className="btn btn-primary btn-sm btn-block" >Editar</button>
                        </td>
                        <td className="w-10">
                            <button onClick={() =>props.deletarAction(produto.sku)} className="btn btn-danger btn-sm btn-block ">Remover</button>

                        </td>
                    </tr>
                )
            })

            }
        </tbody>
    </table>
)