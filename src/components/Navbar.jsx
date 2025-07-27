import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/create">Cadastrar Produto</Link>
    </nav>
  );
};

export default Navbar;
