import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header (){
    return (
        <>
            <header className={styles.header}>
                <h1><span>Games</span></h1>
                <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top10">Top 10</Link></li>
                    <li><Link to="/fewplayed">Few played</Link></li>
                    <li><Link to="/Myfavorites">My favorites</Link></li>
                </ul>
                </nav>
            </header>
        </>
    )
}

export default Header