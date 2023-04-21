import { Header } from './common/Header';
import { Footer } from './common/Footer';

export function Layout(props) {

    return(
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
        
    )
}