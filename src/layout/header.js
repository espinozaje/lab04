import '../style/style.css'
const Header = () => {
    return <header>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="inicio">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ">
        <img src="https://developer.microsoft.com/_devcom/images/logo-ms-social.png" class="bi me-2" width="50" height="50"></img>
        <span class="titulo fs-4">Microsoft</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link active" aria-current="page"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></a></li>
        <li class="nav-item"><a href="/#fundadores" class="nav-link active">Fundadores</a></li>
        <li class="nav-item"><a href="/#fill-tab-example" class="nav-link active">Divisiones</a></li>
       
      </ul>
    </header>
    </header>;
}

export default Header;