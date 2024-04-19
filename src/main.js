const Main = () => {
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
    </main>;
}

export default Main;