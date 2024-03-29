import skyline from '../../images/skyline.jpeg'

export function About(props) {
    return (
        <>

            <div className="container text-white">
                <div className="row">
                    <div className="col-12">
                        <h2>About DRC</h2>
                        <br/>
                        <h4>
                            Welcome to Dead Right Controls, your portal to the cutting-edge realm of automation. We specialize in developing top-tier building 
                            automation solutions, specifically tailored to meet your distinct needs. Our proficiency extends across various sectors, including 
                            agriculture, commercial, industrial, hospitality, and healthcare.
                            <br/><br/>
                            At Dead Right Controls, we immerse you in a world where technology harmoniously blends with your campus, transforming it into a smart 
                            ecosystem. Our custom-made systems not only optimize energy utilization but also reshape your surroundings. We accomplish this by skillfully 
                            integrating intelligent controls, immersive data analytics, and interconnected networks, working synergistically to enhance your performance 
                            and elevate your overall experience.
                        </h4>
                        <br/>
                    </div>
                    <div className="col-12">
                        <h2>Our Mission</h2>
                        <br/>
                        <h4>
                            Our mission is clear: to empower our clients with cutting-edge building automation solutions that revolutionize the way they operate. 
                            We are dedicated to delivering exceptional products and services that go beyond expectations, ensuring energy efficiency, cost savings, 
                            and unparalleled craftsmanship. By leveraging the latest advancements in technology, we provide intelligent control systems that seamlessly 
                            integrate with your existing infrastructure, simplifying operations and improving the overall user experience.
                        </h4>
                        <br/>
                    </div>
                    <div>
                        <img src={skyline} alt="skyline" class="img-fluid"/>
                    </div>
                </div>
            </div>

        </>
    )
}