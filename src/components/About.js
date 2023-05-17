import "./about.css";

const About = () =>{
    return <div>
            <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/1898697_10203332979587490_1032839651_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=vjSjnZdGEUEAX9I85TL&_nc_ht=scontent-vie1-1.xx&oh=00_AfCcDuYWGZ07swhPiecDYZ53U2ZRRgUBOKwYGyfik5JmaQ&oe=648C714F" alt="Jane" />
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://w3schools.com/w3images/team2.jpg" alt="Mike" />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://w3schools.com/w3images/team3.jpg" alt="John"/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
}
export default About;