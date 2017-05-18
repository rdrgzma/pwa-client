import React, { Component } from 'react';
import ProdutoCard from './produtocard';

export default class ListaProduto extends Component {
  render () {

     let produtos=[
       {id:"1", nome:"Produto 1", descricao:"Descrição 1", preco:"R$ 1,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"2", nome:"Produto 2", descricao:"Descrição 2", preco:"R$ 2,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"3", nome:"Produto 3", descricao:"Descrição 3", preco:"R$ 3,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"4", nome:"Produto 4", descricao:"Descrição 4", preco:"R$ 4,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"5", nome:"Produto 5", descricao:"Descrição 5", preco:"R$ 5,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"6", nome:"Produto 6", descricao:"Descrição 6", preco:"R$ 6,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"7", nome:"Produto 7", descricao:"Descrição 7", preco:"R$ 7,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"8", nome:"Produto 8", descricao:"Descrição 8", preco:"R$ 8,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"9", nome:"Produto 9", descricao:"Descrição 9", preco:"R$ 9,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"10", nome:"Produto 10", descricao:"Descrição 10", preco:"R$ 10,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"11", nome:"Produto 11", descricao:"Descrição 11", preco:"R$ 11,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"12", nome:"Produto 12", descricao:"Descrição 12", preco:"R$ 12,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"13", nome:"Produto 13", descricao:"Descrição 13", preco:"R$ 13,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"14", nome:"Produto 14", descricao:"Descrição 14", preco:"R$ 14,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"15", nome:"Produto 15", descricao:"Descrição 15", preco:"R$ 15,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"16", nome:"Produto 16", descricao:"Descrição 16", preco:"R$ 16,00", imagem:"https://materializecss.com/images/office.jpg"},
       {id:"17", nome:"Produto 17", descricao:"Descrição 17", preco:"R$ 17,00", imagem:"https://materializecss.com/images/office.jpg"}
     ];
     let aux=[];
     let novaLista=[];
     for(let i=0; i<produtos.length;i++){
       aux.push(produtos[i]);
       if(aux.length===4){
         novaLista.push(aux);
         aux=[];
       }else if(i===produtos.lenght-1){
         novaLista.push(aux);
       }
     }

     let listaCartoes=(grupo)=>{
       return grupo.map((item,index)=>{
         return(
           <div key={index} className="col m3">
             <ProdutoCard produto={item}/>
           </div>
         );
       });
     };
     let linha = novaLista.map((grupo,index)=>{
       return(
         <div key={index} className="row">
           {listaCartoes(grupo)}
         </div>
       );
     });


    return (<div>
      {linha}
    </div>
    );
  }
}
