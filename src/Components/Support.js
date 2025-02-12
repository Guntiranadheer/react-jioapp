import React from 'react'

function Support() {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide  carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active image1">
            <img src="https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?t=st=1738639315~exp=1738642915~hmac=96a3c44003bbaf5b6d5be20db69288a4abcc0d4f7ae7025fea9a9ae505c061b3&w=996" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/flat-design-phone-different-perspectives_52683-52676.jpg?t=st=1738639375~exp=1738642975~hmac=2bef7437a347a3cdd3b41e8172038d5ba5e12d7668c23def22f68c0edaf3b481&w=1060" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/redhead-caucasian-girl-showing-application-smartphone-as-holding-mobile-phone-credit-card-usi_1258-126215.jpg?t=st=1738639428~exp=1738643028~hmac=ea72d5d22a433c87647c2bc41fab023ecee1e36277db6f64e87da872e25ca3fa&w=1380" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="True"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className='text-center m-5'> Recharge or pay bills</h1>
      <div className="card bg-primary w-50 blue-card">
        <div className="card-body cards">
          <h5 className="card-title"><button className='btn btn-primary prepaid'> Prepaid <button className='btn btn-secondary'> Prepaid</button></button></h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            <form>
              <input className='input1' type="number" placeholder='Jio number' />
              <button className='reacharge-btn'> Recharge</button>
            </form>
          </h6>
        </div>
      </div>
      <div className='d-flex gap-5 sim'>
        <h6 > <img className="jio-img" src="https://jep-asset.akamaized.net/MyJio_Client/Common/express_sim_iOS.gif" alt="" /> <br></br>Get jio SIM</h6>
        <h6 > <img className="jio-img" src=" https://jep-asset.akamaized.net/cms/assets/new-home/port-to-jio.svg" alt="" /> <br></br>Get jio SIM</h6>
        <h6 > <img className="jio-img" src="https://jep-asset.akamaized.net/cms/assets/new-home/port-to-jio.svg  " alt="" /><br></br>Get jio SIM</h6>
        <h6 > <img className="jio-img" src=" https://jep-asset.akamaized.net/cms/assets/new-home/port-to-jio.svg" alt="" /> <br></br>Get jio SIM</h6>
      </div>
      <div>
        <div className='container-fluid grid-cards'>
          <div className='row m-5'>
            <div className='card col-3 p-5 mt-3 gap-4 layouts'>
              <h1> 5G</h1>
              <h4> True 5G</h4>
              <p> Experience  the internet at lightning speed with no latency</p>

            </div>
            <div className='card col-3 mt-3 p-5 gap-4  layouts'>
              <h1> 5G</h1>
              <h4> Plans for all</h4>
              <p> Explore the plans with unlimited voice calls ,data ,SMS, and a host of benifits</p>

            </div>
            <div className='card col-3 mt-3 p-5 gap-4 layouts'>
              <h1>5G</h1>
              <h4>Pan India Coverage</h4>
              <p>Enjoy HD quality voice and the faster data speeds anywhere in india</p>

            </div>
            <div className=' card col-3 mt-3 p-5 gap-4 layouts'>
              <h1>5G</h1>
              <h4>Pan India Coverage</h4>
              <p>Enjoy HD quality voice and the faster data speeds anywhere in india</p>

            </div>

          </div>

        </div>
        <div className='card image-card' >
          <div className='port-number'>
            <h1 className='text-white'> Thriled about jio <br></br> benifits?</h1>
            <p className='text-white'> order a new SIM or port your number to jio</p>
            <button className='btn btn-secondary sim-btn'>Get new SIM</button> <button className='btn btn-secondary sim-btn1 ' > Port to Jio</button>
          </div>
          <img className='girl-image' src=" https://jep-asset.akamaized.net/cms/assets/revamp-mobile-v2/thrilled-desk.webp" alt="" />

        </div>

        <div className='blue'>
          <h1 className='heading m-3 text-center'> Popular mobile plans</h1>
          <p className='text-center'>  choose your connection  type to find a plan as per digital needs</p>
          <button className='pre1 btn btn-primary'>prepaid<button className='btn post'> postpaid</button></button>
          <div className=' container '>
            <div className='row m-4 gap-1'>
              <div className=' card col-4 rupee p-3 c1'>
                <h1> &#8377; 749</h1>
                <img className=" youtube-icon" src="https://jep-asset.akamaized.net/jiocom/static/images/ic_jiotv-n.svg" alt="" /> <p className='p2'>+2more</p>
                <hr></hr>

                <p>Validity <br></br><span> 72Days</span></p>
                <div className='gb'>
                  <p>Data <br></br><span> 2GB/Day+20GB</span></p>
                </div>
                <button className='reach'> Recharge</button>
                <button className='reach1'> View details</button>




              </div>
              <div className='card col-4 p-3  c2 '>
                <h1> &#8377;1029</h1>
                <img className=' youtube-icon' src="https://jep-asset.akamaized.net/jiocom/static/images/Z0071.svg" alt="" /><p className='p2'> +3more OTT</p>
                <hr></hr>
                <p>Validity <br></br><span> 84Days</span></p>
                <div className='gb'>
                  <p>Data <br></br><span> 2GB/Day</span></p>
                </div>
                <button className='reach'> Recharge</button>
                <button className='reach1'> View details</button>

              </div>
              <div className=' card col-4 p-3 c3  '>
                <h1> &#8377;3599</h1>
                <img className=' youtube-icon' src="https://jep-asset.akamaized.net/jiocom/static/images/ic_jiotv-n.svg" alt="" /><p className='p2'>+2more</p>
                <hr></hr>
                <p>Validity <br></br><span> 365Days</span></p>
                <div className='gb'>
                  <p>Data <br></br><span> 2.5GB/Day</span></p>
                </div>
                <button className='reach'> Recharge</button>
                <button className='reach1'> View details</button>

              </div>

            </div>
            <button className='view-btn'>View all prepaid plans</button>

          </div>
          <div>
          </div>

        </div>
        <div className="container text-center ">
          <h1 className='trending'> What's trending</h1>
          <p className='trending'>get updated on outgoing offers,latest products and more.</p>

          <div className='d-flex flex-row '>
            <div className="card super-card m-2">
              <img src=" https://images.unsplash.com/photo-1738509559266-bdd2a813c8ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://plus.unsplash.com/premium_photo-1731973155926-bdc2be5ea635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1738681937~exp=1738685537~hmac=7ae8f2818d98aa542628cc8cf9be9b3a3a393deb9ad8c4089706f322aa2ef23c&w=996" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>

          </div>==
          <h1 className='trending'> Already a jio user</h1>
          <div className='d-flex flex-row '>
            <div className="card super-card m-2">
              <img src=" https://images.unsplash.com/photo-1738509559266-bdd2a813c8ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://plus.unsplash.com/premium_photo-1731973155926-bdc2be5ea635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1738681937~exp=1738685537~hmac=7ae8f2818d98aa542628cc8cf9be9b3a3a393deb9ad8c4089706f322aa2ef23c&w=996" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
          </div>==
          <h1 className='trending'> Already a jio user</h1>
          <div className='d-flex flex-row '>
            <div className="card super-card m-2">
              <img src=" https://images.unsplash.com/photo-1738509559266-bdd2a813c8ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://plus.unsplash.com/premium_photo-1731973155926-bdc2be5ea635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
            <div className="card super-card m-2">
              <img src=" https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1738681937~exp=1738685537~hmac=7ae8f2818d98aa542628cc8cf9be9b3a3a393deb9ad8c4089706f322aa2ef23c&w=996" className="wow-image" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <h4 className='para'> Stay connected when aboard</h4>
                  <p className='para'>carries jio benifits wherever you go international roaming plans</p>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className='bouquet'>
              <h1> A bouquet of jio apps</h1>
              <p> with possibilites of your fingerprints digital feels magical</p>
              <button className='view-btn1'>View all prepaid plans</button>
            </div>
            <img className='color-image' src=" https://jep-asset.akamaized.net/cms/assets/revamp-mobile-v2/banner-2-desk.webp" alt="" />
          </div>

        </div>
        <div className='footer-section'>
          <div className='footer-heading'>
            <h1 className='text-white'> Need guidence?</h1>
            <p className='text-white'> we'd love to help you</p>
          </div>
          <div className='footer-buttons'>
            <button className='footer-btn'>Support</button>
            <button className='footer-btn'>Chat with us</button>
            <button className='footer-btn'>Call us</button>
            <button className='footer-btn'>Find a store</button>
          </div>

        </div>==
        <div className="container text-center footer-ul-tag2">
          <div className="row row-cols-3">
            <div className="col-2">
              <ul className='d-flex flex-column ul-tags'>
                <li> <h5> offerings</h5></li>
                <li>prepaid</li>
                <li> postpaid</li>
                <li> port to jio</li>

                <li> Apps</li>
                <li>e SIM</li>
                <li> Wifi calling</li>
                <li>Jio tunes</li>
                <li> Devices</li>
                <li>Jio book</li>
                <li>5G network</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className='d-flex flex-column ul-tags '>
                <li> <h5> Support</h5></li>
                <li>prepaid</li>
                <li> postpaid</li>
                <li> port to jio</li>

                <li> Apps</li>
                <li>e SIM</li>
                <li> Wifi calling</li>
                <li>Jio tunes</li>
                <li> Devices</li>
                <li>Jio book</li>
              </ul>

            </div>
            <div className="col-2 ">
              <ul className='d-flex flex-column ul-tags '>
                <li><h5>company</h5></li>
                <li> prepaid</li>
                <li> postpaid</li>
                <li> port to jio</li>

                <li> Apps</li>
                <li>e SIM</li>
                <li> Wifi calling</li>
                <li>Jio tunes</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className='d-flex flex-column ul-tags'>
                <li> <h5> useful links</h5></li>
                <li>prepaid</li>
                <li> postpaid</li>
                <li> port to jio</li>
                <li> Apps</li>
                <li>e SIM</li>
                <li> Wifi calling</li>

              </ul>
            </div>
            <div className="col-4">
              <ul className='d-flex flex-column ul-tags'>
                <li><h5> Connect with us</h5></li>
                <div className='d-flex flex-row'>
                  <img className="img1" src="https://img.freepik.com/free-vector/social-life-concept-illustration_114360-1851.jpg?t=st=1738731940~exp=1738735540~hmac=361ae81d8d7aeee81eca9a8bf999fb4c13ed7cae34bb237eb2236e008a192e0b&w=740" alt="" />
                  <img className="img1" src="https://img.freepik.com/free-vector/social-life-concept-illustration_114360-1851.jpg?t=st=1738731940~exp=1738735540~hmac=361ae81d8d7aeee81eca9a8bf999fb4c13ed7cae34bb237eb2236e008a192e0b&w=740" alt="" />
                  <img className="img1" src="https://img.freepik.com/free-vector/social-life-concept-illustration_114360-1851.jpg?t=st=1738731940~exp=1738735540~hmac=361ae81d8d7aeee81eca9a8bf999fb4c13ed7cae34bb237eb2236e008a192e0b&w=740" alt="" />
                  <img className="img1" src="https://img.freepik.com/free-vector/social-life-concept-illustration_114360-1851.jpg?t=st=1738731940~exp=1738735540~hmac=361ae81d8d7aeee81eca9a8bf999fb4c13ed7cae34bb237eb2236e008a192e0b&w=740" alt="" />
                  <img className="img1" src="https://img.freepik.com/free-vector/social-life-concept-illustration_114360-1851.jpg?t=st=1738731940~exp=1738735540~hmac=361ae81d8d7aeee81eca9a8bf999fb4c13ed7cae34bb237eb2236e008a192e0b&w=740" alt="" />
                </div>
                <div>
                <h1 className='download'> Download my jio app</h1>
                <button className='google m-2'> Get it on google play</button>
                <button className='google m-2'> Download on the app store</button>
                </div>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Support