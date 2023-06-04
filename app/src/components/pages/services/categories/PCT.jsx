import box_3 from '../../../../images/page_images/box-3.jpg'
import box_5 from '../../../../images/page_images/box-5.JPG'

function PCT(props) {
    return (
        <> 
            <div className="container text-white mt-5">
            <div className="row">
                    <h1 className="text-center">Peripheral Control Termination</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={box_3} className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <h4>
                            We specialize in termination of peripheral controls vital to your automation system. We guarantee reliable connections and optimal performance of your peripheral controls.
                            <br/>
                            The proper termination of peripheral controls is vital to the overall functionality and reliability of your automation system. Our skilled technicians are experts in connecting and terminating control wires with precision, attention to detail, and industry best practices.
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h4>
                            We understand the critical role that peripheral controls play in the seamless operation of your automation system. Our technicians carefully label, organize, and test all terminations to ensure a well-organized and functional control panel setup. By adhering to strict quality standards, we guarantee reliable connections and optimal performance of your peripheral controls.
                            <br/>
                            Trust Dead Right Controls to handle the critical task of peripheral control termination, ensuring the smooth operation and optimal performance of your automation system. Our commitment to excellence and attention to detail ensures that every termination is executed flawlessly, giving you peace of mind and confidence in your automation infrastructure.
                        </h4>
                    </div>
                    <div className="col-lg-6">
                        <img src={box_5} className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PCT;