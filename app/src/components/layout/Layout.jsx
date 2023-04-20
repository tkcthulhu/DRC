import { Header } from './common/Header';
import { Footer } from './common/Footer';

function Layout(props) {

    return(
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
        
    )
}