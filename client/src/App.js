
import './App.css';
import { React, useState } from "react";




const artigos = [
  {
    imagem:'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.webp',
    titulo:"Descubra como fazer um site rapido",
    tags:'Tecnologia',
    descricao:'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia venenatis lectus et ultricies. Quisque consectetur, ante eu feugiat mollis, metus ligula interdum tortor, eu scelerisque felis velit ac velit. Morbi dignissim eu lorem condimentum pretium. Suspendisse consectetur vel tellus sit amet rutrum.'

  },
  {
    imagem:'https://www.casinhadebrincar.com.br/loja/wp-content/uploads/2020/08/01-FOTO-DESTAQUESuporte-de-rede-2-1.jpg',
    titulo:"Como fazer tudo sem fazer nada",
    tags:'Tecnologia',
    descricao:'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia venenatis lectus et ultricies. Quisque consectetur, ante eu feugiat mollis, metus ligula interdum tortor, eu scelerisque felis velit ac velit. Morbi dignissim eu lorem condimentum pretium. Suspendisse consectetur vel tellus sit amet rutrum.'

  },
  {
    imagem:'https://img.elo7.com.br/product/original/41773DF/grimorio-black-clover-caderno.jpg',
    titulo:"Grimŕio de 5 folhas pode ser uma coisa loka",
    tags:'Anime',
    descricao:'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia venenatis lectus et ultricies. Quisque consectetur, ante eu feugiat mollis, metus ligula interdum tortor, eu scelerisque felis velit ac velit. Morbi dignissim eu lorem condimentum pretium. Suspendisse consectetur vel tellus sit amet rutrum.'

  },
  {
    imagem:'https://www.agendartecultura.com.br/wp-content/uploads/2021/08/Jujutsu-kaisen-divulga%C3%A7%C3%A3o-1024x576.jpg',
    titulo:"Animes de segundo grau favorito, veja minha lista",
    tags:'Anime',
    descricao:'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia venenatis lectus et ultricies. Quisque consectetur, ante eu feugiat mollis, metus ligula interdum tortor, eu scelerisque felis velit ac velit. Morbi dignissim eu lorem condimentum pretium. Suspendisse consectetur vel tellus sit amet rutrum.'

  }
]


function App() {


  

  

  const [busca,setBusca] = useState('')

  console.log(busca)
  
  //const listaFiltrada = lista.filter((lista) => lista.startsWith(busca));

  //console.log(listaFiltrada)

  //const listaItems = listaFiltrada.map((lis) => <li>{lis}</li>)

  
 const artigosFiltrados = artigos.filter((art) => art.titulo.toLowerCase().includes(busca.toLowerCase()));
  
 //console.log(teste)



  return (
   
   <div className='section'>

    <div className='navi'>

      <div className='logo'>Logo</div>

      <div className='menu'>
          
          
            <li><a href="#">Blog</a></li>
            
           
           
         
      </div>
    </div>

    <div className='banner'>

      <div className='tema'>

      <h1 className='title'>Blog</h1>

      </div>
          
      
    </div>

   

   

    <div className='container'>
      <div className='pesquisa'>

        <div className='pesquisar'>

          <input type="search" name="pesquisar" placeholder='Pesquise o seu interesse aqui!' value={busca} onChange={(e) => setBusca(e.target.value)}/>
          <button>Pesquisar</button>

        </div>

       



      </div>
     

      <div className='container-aticle'>


         {artigosFiltrados.map((art) => {
           return( 
            <div className='artigo'>
              
              <a href='#'>
              <img src={art.imagem} className="imagem" href="#"></img>
              </a>
            <h3 className='title-artigo'><a href="#">{art.titulo}</a></h3>
            <div className='container-single-text'>
              <div className='tags'>
                <h5>{art.tags}</h5>
              </div>
              <p>{art.descricao}</p>
  
            </div>
  
          </div>
           ) 
         })}
        


      </div>


    </div>

    
    <div className='footer'>

    </div>
    
   </div>

  

  );
}

export default App;
