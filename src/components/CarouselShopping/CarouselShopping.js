// Ei, pessoal! Vamos dar uma olhada nesse componente chamado CarouselShopping.
// Ele é responsável por exibir um incrível carrossel de imagens na nossa página, sabe, para mostrar aqueles produtos bacanas ou promoções imperdíveis.
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselShopping.css';

// Aqui, temos a função CarouselShopping que representa nosso componente.
// Ela recebe as 'props', que são como argumentos para nossa função.
function CarouselShopping(props) {
// Estamos desestruturando as 'props' aqui para pegar as imagens.
// 'images' é um array que contém objetos com a URL da imagem e o texto alternativo.
const { images } = props;
// Agora, vamos retornar o componente renderizado.
return (
    // Primeiro, criamos um container para o nosso carrossel.
    // Ele vai manter tudo organizadinho.
    <div className="carouselContainer">
        {/* 
        Aqui, estamos usando o componente Carousel do react-bootstrap.
        Ele cuida de toda a mágica por trás das transições e navegação entre as imagens.
        */}
        <Carousel>
            {/* 
            Beleza, agora precisamos exibir cada imagem, certo?
            Então, vamos iterar sobre o array 'images' e criar um Carousel.Item para cada uma delas.
            */}
            {images && images.map((image, index) => (
                // Cada Carousel.Item precisa de uma chave única, assim o React sabe qual item é qual.
                <Carousel.Item key={index}>
                    {/* 
                    Inserimos a imagem dentro do Carousel.Item com a classe "carouselImage" e os atributos src e alt.
                    A classe "carouselImage" pode ser usada para adicionar estilo à imagem, deixando tudo mais bonito.
                    */}
                    <img className="carouselImage" src={image.src} alt={image.alt} />
                    {/* 
                    Vamos adicionar uma legenda à imagem, com título ou descrição.
                    A legenda aparece sobre a imagem, mas some quando o usuário interage com o carrossel.
                    */}
                    <Carousel.Caption>
                        <h3>{image.alt}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);
}

// Por fim, exportamos nosso componente CarouselShopping para que possamos usá-lo em outras partes do nosso site.
export default CarouselShopping;