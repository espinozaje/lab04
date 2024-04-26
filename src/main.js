import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const Main = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

    return <main>
        <main id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel" width="100%" height="500px">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="bd-placeholder-img" width="100%" height="100%" src="https://imagenes.elpais.com/resizer/p8Pl064yE-zhRBJHF95ZJOwwALM=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/JN2H24X3HFNBXF75AXPUYHA4AU.jpg"></img>
        <div class="container">
          <div class="carousel-caption text-start">
            
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <img class="bd-placeholder-img" width="100%" height="100%"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Aerial_Microsoft_West_Campus_August_2009.jpg/1920px-Aerial_Microsoft_West_Campus_August_2009.jpg"></img>
        <div class="container">
          <div class="carousel-caption">
            <h1></h1>
            
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="bd-placeholder-img" width="100%" height="100%" src="https://www.enriquedans.com/wp-content/uploads/2023/07/Office-with-Teams-768x522.jpg"></img>
        <div class="container">
          <div class="carousel-caption text-end">
            
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">السابق</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">التالي</span>
    </button>
  </main>
    <p class="text-center text-body-secondary bg-body-tertiary">Microsoft Corporation es una corporación tecnológica multinacional estadounidense con sede en Redmond, Washington. Los productos de software más conocidos de Microsoft son la línea de sistemas operativos Microsoft Windows, el conjunto de aplicaciones de productividad Microsoft 365, el motor de búsqueda Microsoft Bing y el navegador web Microsoft Edge. Sus productos de hardware emblemáticos son las consolas de videojuegos Xbox y la línea Microsoft Surface de computadoras personales con pantalla táctil.

Se considera una de las cinco grandes empresas estadounidenses de tecnología de la información junto con Alphabet (empresa matriz de Google), Amazon, Apple y Meta Platforms (empresa matriz de Facebook).

Paul Allen y Bill Gates la fundaron el 4 de abril de 1975 para desarrollar y comercializar intérpretes de BASIC para el Altair 8800, un microordenador diseñado en 1974 y basado en el procesador Intel 8080. A mediados de la década de 1980, dominó el mercado de los sistemas operativos para computadoras personales con MS-DOS, que continuó con Microsoft Windows.</p>

 

<h1 class="text-center">FUNDADORES</h1>
    <div className="d-flex justify-content-around" id="fundadores">
    
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/800px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg" roundedCircle/>
          
        <Card.Body>
               
          <Card.Title>Bill Gates</Card.Title>
          <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="dark"
      >
        Más información <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
      </Button>
      <div style={{ minHeight: '10px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '350px' }}>
            William Henry Gates III, conocido como Bill Gates, es un magnate empresarial, desarrollador de software, inversor, autor y filántropo estadounidense. Es cofundador de Microsoft.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
         
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Paul_G._Allen_%28cropped%29.jpg"  />
        <Card.Body>
          <Card.Title>Paul Allen</Card.Title>


          <>
      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text2"
        aria-expanded={open2}
        variant="dark"
      >
        Más información <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
      </Button>
      <div style={{ minHeight: '10px' }}>
        <Collapse in={open2} dimension="width">
          <div id="example-collapse-text2">
            <Card body style={{ width: '350px' }}>
            Fue un empresario, magnate de negocios, inversor y filántropo estadounidense. Junto con su amigo de la infancia Bill Gates fue fundador de la empresa Microsoft en 1975.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
          
          
        </Card.Body>
      </Card>
    </div>
  
    <h1 class="text-center">Divisiones</h1>
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
      variant="underline"
    >
      <Tab  eventKey="home" title="Office Experience Group">
      <img width="100%" height="100%"
     src="https://vigneshsharepointthoughts.files.wordpress.com/2018/03/1.png?w=863"></img>
      <p class="text-center">Se encarga en el desarrollo de la suite de ofimática Microsoft Office. Microsoft Office incluye varios programas, entre los que destacan Word (procesador de textos), Access (aplicación para base de datos), Excel (hoja de cálculo), Outlook (agenda electrónica), frecuentemente usado con Exchange Server), PowerPoint (software de presentación de diapositivas) y Publisher (realización de diferentes publicaciones). A partir de la versión 2003, se incluyen nuevos programas como Visio, Project, MapPoint, InfoPath y OneNote.121​ </p>
      </Tab>


      <Tab eventKey="profile" title="Division Windows">
      <img width="100%" height="100%"
     src="https://i.blogs.es/93ec67/2dd9ef71-fd3c-43a1-9ab9-073d552a7db9/450_1000.jpeg">
     </img>
      <p class="text-center">Anteriormente con el nombre de Retail and Compusition126​ (en inglés, Platform Products and Services Division)127​ produce el producto estrella de la compañía, Windows. Además, es la encargada del servicio MSN.

También desarrolla Microsoft Visual Studio, el conjunto de aplicaciones y herramientas de programación de la compañía. </p>
      </Tab>



      <Tab eventKey="longer-tab" title="Linkedin Corporation">
      <img width="100%" height="100%"
     src="https://upload.wikimedia.org/wikipedia/commons/6/65/LinkedIn_Headquarters_Sunnyvale.jpg">
     </img>
      <p class="text-center">Es una división de Microsoft, adquirida desde el 13 de junio de 2016. La división es una comunidad social destacada por su red social del mismo nombre, enfocándose hacia las empresas, negocios y el empleo.</p>
      </Tab>


      <Tab eventKey="contact" title="Skype Technologies" >
      <img width="100%" height="100%"
     src="https://api.time.com/wp-content/uploads/2014/11/109174158.jpg">
     </img>
      <p class="text-center">La división Skype es una empresa luxemburguesa conocido por desarrollar la aplicación que utiliza el mismo nombre de la empresa, mostrando la capacidad de comunicarse a base de texto, audio, y vídeo a través de Internet (VoIP). </p>
      </Tab>


      <Tab eventKey="microsoftg" title="Microsoft Gaming" >
      <img width="100%" height="100%"
     src="https://i.blogs.es/618b94/microsoftgaming/1366_2000.jpeg">
     </img>
      
      <p class="text-center">La propia compañía desarrolla y publica sus propios videojuegos tanto para las videoconsolas Xbox como para Windows, con la ayuda de su principal filial Xbox Game Studios, así como de ZeniMax Media y Activision Blizzard.</p>
      </Tab>


      <Tab eventKey="microsoftpre" title="Microsoft Press" >
      <img width="100%" height="100%"
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Microsoft_press.png/220px-Microsoft_press.png">
     </img>
      <p class="text-center">Microsoft Press es el brazo editorial de Microsoft, la publicación de libros por lo general se ocupa de las distintas tecnologías de Microsoft actual. Microsoft Press presentó por primera vez los libros El Libro de Apple Macintosh Cary Lu y reflexiones para el IBM PC por Peter Norton en 1984 en la Costa Oeste Computer Faire.</p>
      </Tab>


      <Tab eventKey="microsoftmob" title="Microsoft Mobile" >
      <img width="100%" height="100%"
     src="https://mott.pe/noticias/wp-content/uploads/2017/10/Microsoft-windows-phone-desaparece_-adi%C3%B3s-a-los-celulares-de-Microsoft5-e1507586362174.jpg">
     </img>
      <p class="text-center">Microsoft Mobile fue una división de Microsoft, con sede en Finlandia, dedicada al diseño y fabricación de teléfonos móviles. Comercializa la gama Lumia. Tiene su origen en la compra por parte de Microsoft de la división de Dispositivos y Servicios de Nokia, completada el 25 de abril de 2014.</p>
      </Tab>
    </Tabs>


    </main>;
}

export default Main;

