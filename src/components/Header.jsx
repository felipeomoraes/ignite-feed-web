import styles from './Header.module.css';
import imgIgniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={imgIgniteLogo} alt="Ignite Logo" />
                <h1>Ignite Feed</h1>
            </div>
        </header>
    )
}