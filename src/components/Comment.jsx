import { ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Bussarello</strong>
                            <time title='8 de Junho de 2023' dateTime="2023-06-08 09:20:00">Cerca de 1h atras</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                        
                    <p>Muito bom Devon, parabens!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}