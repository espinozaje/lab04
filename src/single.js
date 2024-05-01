import Microsoft from './data/microsoft.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const microsoft = Microsoft.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{microsoft.name}</h1>
        <hr></hr>
        <img src={microsoft.picture}></img>
        <p class="text-center text-body-secondary bg-body-tertiary">{microsoft.description}</p>
    </>);
}

export default Single;