import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';

function MyNavbar() {
  const expand = 'md';
  const { cartCount } = useContext(CartContext);

 
  const [expanded, setExpanded] = useState(false);
  const closeMenu = () => setExpanded(false);

  const links = [
    { to: '/', label: 'صفحه اصلی' },
    { to: '/ContactUs', label: 'ارتباط با ما' },
    { to: '/Aboutus', label: 'درباره ما' },
  ];

  return (
    <Navbar
      key={expand}
      expand={expand}
      dir="rtl"
      className="site-navbar sticky-top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

        <Navbar.Brand
          as={Link}
          to="/"
          className="lalezar fs-4 brand-mark"
          onClick={closeMenu}
        >
          نخ فرنگ
        </Navbar.Brand>

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton dir="rtl">
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              className="lalezar"
            >
              نخ فرنگ
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body dir="rtl">
            <Nav className="justify-content-start pe-3 flex-grow-1 gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  className="nav-link"
                  to={link.to}
                  end
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        {/* حساب کاربری و سبد خرید */}
        <div className="nav-actions">
          <Link
            to="/Login"
            className="cart-link"
            aria-label="ورود / ثبت‌نام"
            onClick={closeMenu}
          >
            <FiUser />
          </Link>
          <Link
            to="/Cart"
            className="cart-link"
            aria-label="سبد خرید"
            onClick={closeMenu}
          >
            <FiShoppingCart />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
