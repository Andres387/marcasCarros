import './ItemCrypto.css';

const ItemCrypto = (props) => {
    return (
        <div className='container-crypto'>
            <div className='header-crypto'>
                <h1>Nombre:<span className='price-crypto'>{props.name}</span></h1>
                <h2>Codigo:<span className='price-crypto'>{props.codigo}</span></h2>
            </div>
            <div className='body-crypto'>
                
            </div>
        </div>
    )
};

export default ItemCrypto;