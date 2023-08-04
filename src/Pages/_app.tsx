import { Header } from "@/components/Header/index"
import { AppProps } from "../../node_modules/next/app"
import "../styles/global.scss"


function App({Component, pageProps}: AppProps) {
    return (
        <>
        <Header />
        <Component {...pageProps} />
        </>
    )
}
export default App