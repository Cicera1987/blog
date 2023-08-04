import styles from "./styles.module.scss"
import Image from "../../../node_modules/next/image"
import logo from "../../../public/images/logo.png"
import { ActiveLink } from "../ActiveLink/index"


export function Header() {
    return (
        <div>
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <a>
                        <Image src={logo} width={350} height={100} alt="logo" />
                    </a>
                    <nav>
                        <ActiveLink legacyBehavior href="/" activeClassName={styles.active}><a id="link">Home</a></ActiveLink>
                        <ActiveLink legacyBehavior href="/post" activeClassName={styles.active}><a id="link">Conteúdo</a></ActiveLink>
                        <ActiveLink legacyBehavior href="/sobre" activeClassName={styles.active}><a id="link">Quem somos?</a></ActiveLink>
                    </nav>
                    <a className={styles.readyButton} type='button' href="https://blog.com">COMEÇAR</a>
                </div>
            </header>
        </div>
    )
}

