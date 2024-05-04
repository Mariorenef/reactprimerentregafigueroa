import CartWidget from './CartWidget'
export const Navbar = () => {
    return (
        <nav>
            <h2>Placeholder</h2>
            <div>
                <button>Camperas</button>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Buzos</button>
            </div>
            <CartWidget />
        </nav>
    );
};