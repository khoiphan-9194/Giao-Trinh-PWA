// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  head: {
    background: '#red'
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};


function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
  
    <header className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
/*
   <div style={styles.card}>
      <div style={styles.heading}>Lorem ipsum dolor</div>
      <div style={styles.content}>
*/