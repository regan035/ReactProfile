import React from "react";

function About() {
  return (
    <section className="portfolio" >
        <h2>Portfolios </h2>
    
        <div className="row text-center" >

            <div className="col-sm-6 col-md-4 " >
                <div className="card" >
                    <img className="card-img-top" src="img/004.jpeg" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Warehouse Management</h4>
                        <p className="card-text">A react application that manage team members and inventory transactions.</p>
                        <a href="#" className="btn btn-outline-dark">Project</a>
                        <a href="" className="btn btn-outline-dark">Github</a>
                    </div>
                </div >
            </div >
            <div className="col-sm-6 col-md-4 " >
                <div className="card" >
                    <img className="card-img-top" src="img/005.jpg" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Financial Index Converter </h4>
                        <p className="card-text">Designed to convert a stock's price into any currency that you choose.</p>
                        <a href=" https://fred-smu.github.io/project1.1/" className="btn btn-outline-dark">Project</a>
                        <a href=" https://github.com/fred-smu/project1.1" className="btn btn-outline-dark">Github</a>
                    </div>
                </div >
            </div >
            <div className="col-sm-6 col-md-4 " >
                <div className="card"  >
                    <img className="card-img-top" src="img/006.jpeg" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">Restaurant Blog</h4>
                        <p className="card-text">Utilized Zemato-Api, MySQL to build a restaurant blog application.</p>
                        <a href=" https://project2-cody-gen-leo.herokuapp.com/" className="btn btn-outline-dark">Project</a>
                        <a href=" https://github.com/lfernandez79/project2" className="btn btn-outline-dark">Github</a>
                        
                    </div>
                </div >
            </div >
        </div >
    </section>
  );
}

export default About;
