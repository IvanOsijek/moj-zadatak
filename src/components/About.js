import "./about.css";

const About = () =>{
    return <div>
            <div className="about-section">
  <h1>About Us </h1>
  <p>We are international best rated Chat APP</p>
  <p>Fully responsive with awesome perks</p>
</div>

<h2 >Our developers</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/1898697_10203332979587490_1032839651_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=vjSjnZdGEUEAX9I85TL&_nc_ht=scontent-vie1-1.xx&oh=00_AfCcDuYWGZ07swhPiecDYZ53U2ZRRgUBOKwYGyfik5JmaQ&oe=648C714F" alt="Jane" />
      <div className="container">
        <h2>Ivan Periša</h2>
        <p className="title">Lead dev and Grand Master</p>
        <p>Through his expertise he singlehandedly built the app!</p>
        <p>devgod@chatapp.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://w3schools.com/w3images/team2.jpg" alt="Mike" />
      <div className="container">
        <h2>Marko Šoštarić</h2>
        <p className="title">A peasant that did all the work</p>
        <p>We gave him minimal salary and he worked like there's no tomorrow.</p>
        <p>peasant@chatapp.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://w3schools.com/w3images/team3.jpg" alt="John"/>
      <div className="container">
        <h2>Valentin Vranješ</h2>
        <p className="title">Mastermind</p>
        <p>He is the real reason we were all able to do it!</p>
        <p>master.please@chatapp.com</p>
        <p><button id="redbutton" className="button">Do not contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
}
export default About;