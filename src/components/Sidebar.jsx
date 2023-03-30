import { PencilSimpleLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.header} 
                src="https://fastly.picsum.photos/id/918/500/300.jpg?hmac=_OILhn1dM4OQxqP-GEz0ddX5uzjD9JabSWZwIo4PGgo"
            />

            

            <div className={styles.profile}>

                <img 
                    className={styles.avatar} 
                    src="https://github.com/felipeomoraes.png" 
                    alt="Imagem do Avatar" 
                />
                
                <strong>Felipe Moraes</strong>
                <span>Fullstack Developer</span>
            </div>


            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} weight="bold" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}