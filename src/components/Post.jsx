import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.profile}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/felipeomoraes.png" 
                        alt="Imagem do Avatar" 
                    />
                    <div>
                        <strong>Felipe Moraes</strong>
                        <span>Fullstack Developer</span>
                    </div>
                </div>
                
                <time title="28 de Março às 22hs" dateTime='2023-03-28 20:00:00' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form>
                <strong>Deixe seu feedback</strong>
                <textarea name="" id="" cols="30" rows="3" placeholder='Escreva um comentário...'></textarea>
                <footer>
                    <button type="button">Publicar</button>
                </footer>
            </form>
        </article>
    );
}