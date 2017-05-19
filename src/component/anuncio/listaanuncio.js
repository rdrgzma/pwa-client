import React, { Component } from 'react';
import AnuncioCard from './anunciocard';

export default class ListaAnuncio extends Component {
  render () {


     let anuncios=[
       {id:"1", nome:"Anuncio 1", descricao:"Descrição 1", preco:"R$ 1,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"2", nome:"Anuncio 2", descricao:"Descrição 2", preco:"R$ 2,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"3", nome:"Anuncio 3", descricao:"Descrição 3", preco:"R$ 3,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"4", nome:"Anuncio 4", descricao:"Descrição 4", preco:"R$ 4,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"5", nome:"Anuncio 5", descricao:"Descrição 5", preco:"R$ 5,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"6", nome:"Anuncio 6", descricao:"Descrição 6", preco:"R$ 6,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"7", nome:"Anuncio 7", descricao:"Descrição 7", preco:"R$ 7,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"8", nome:"Anuncio 8", descricao:"Descrição 8", preco:"R$ 8,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"9", nome:"Anuncio 9", descricao:"Descrição 9", preco:"R$ 9,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"10", nome:"Anuncio 10", descricao:"Descrição 10", preco:"R$ 10,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"11", nome:"Anuncio 11", descricao:"Descrição 11", preco:"R$ 11,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"12", nome:"Anuncio 12", descricao:"Descrição 12", preco:"R$ 12,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"13", nome:"Anuncio 13", descricao:"Descrição 13", preco:"R$ 13,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"14", nome:"Anuncio 14", descricao:"Descrição 14", preco:"R$ 14,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"15", nome:"Anuncio 15", descricao:"Descrição 15", preco:"R$ 15,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"16", nome:"Anuncio 16", descricao:"Descrição 16", preco:"R$ 16,00", imagem:"http://materializecss.com/images/office.jpg"},
       {id:"17", nome:"Anuncio 17", descricao:"Descrição 17", preco:"R$ 17,00", imagem:"http://materializecss.com/images/office.jpg"}
     ];
     let aux=[];
     let novaLista=[];
     for(let i=0; i<anuncios.length;i++){
       aux.push(anuncios[i]);
       if(aux.length===4){
         novaLista.push(aux);
         aux=[];
       }else if(i===anuncios.lenght-1){
         novaLista.push(aux);
       }
     }

     let listaCartoes=(grupo)=>{
       return grupo.map((item,index)=>{
         return(
           <div key={index} className="col m3">
             <AnuncioCard anuncio={item}/>
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
