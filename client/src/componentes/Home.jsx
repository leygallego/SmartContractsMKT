import React from 'react'
import NavBar from './NavBar'
import Button from '@mui/material/Button';
import './Home.css';
import SearchIcon from '@mui/icons-material/Search';
import '../images/azul.png';
import '../images/assetHome.png';
import '../images/assetHome2.png';



function Home() {
    return (
        <>
                    <NavBar />

        <div className="main">

            
            <div className="area-texto">
                <div className="texto-home">
                <h1>Soluciona tus necesidades de codigo más rapido que nunca</h1>

                </div>
                <div className="texto-secundario">
                <p>Pon recompensas por tus problemas más dificiles y ve como la comunidad lo resuelve</p>

                </div>
                <div className="button-container">
                        <Button 
                    className="busca-contratos"    
                    variant="contained"
                    startIcon={<SearchIcon/>}
                    >Buscar Contratos</Button> 
                </div>
                <div className="contenedor-secundario">
                    <div className="wrap-downpage">
                        <div className="texto-motivador">
                    <p>"Mi abuelo siempre me decía hazlo lento que voy apurado" y codear primero los tests puede parecer más lento pero los beneficios son increíbles.</p> <br />
                    <p>Desde evitar romper hasta detección de bugs que habíamos olvidado, automatizar los tests nos ayuda a construír sin miedo y de forma robusta</p>
                </div>
                
                        </div>
                    </div>
                    
                
            
            </div>

            <div className="wraper-images">
            <div className="imagen-home">
            
            <img src="/images/assetHome2.png" alt="imagen para home" />

            </div>
            <div className="imagen-azul">
            <img src="/images/azul.png" alt="imagen azul" />
            </div>
            </div>
        

        </div>
        
                    
                
        </>
        
    )
}

export default Home
