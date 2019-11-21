import React from 'react';
import Link from './Link';

export default class Links extends React.Component {
  constructor() {
    super();
    this.state = {
      lang: "en",
      en: ["Beauty and You", "Healthy Cooking", "Outdoor Camping", "Activate", "Meditation",
           "2 + 2 = 3", "Cinephiles' and Booklovers' Corner", "Yesterday Today Tomorrow"],
      hr: ["Ljepota i Vi", "Kuhanje na zdrav način", "Kampiranje na otvorenom", "Aktivirajte se",
           "Meditacija", "2 + 2 = 3", "Za filmofile i knjigoljupce", "Jučer danas sutra"]
    }
    this.createLinks = this.createLinks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  createLinks() {
    let linksArray = [];
    let links = this.state[this.state.lang];
    for (let i=0; i<links.length; i++) {
      linksArray.push(<Link key={i} link={links[i].toUpperCase()} />)
    }
    return linksArray;
  }
  handleChange(event) {
    this.setState({
      lang: (event.target.value)
    });
  }
  handleClick() {
    let dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } 
    else {
      dropdown.style.display = "block";
    }
  }
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="links-wrapper">
          {this.createLinks()}
        </div>
        <div onClick={this.handleClick} className="dropdown-wrapper">
          <i className="fas fa-ellipsis-h"></i>
          <div id="dropdown" className="dropdown">
            {this.createLinks()}
          </div>
        </div>
        <select className="lang-select" onChange={this.handleChange}>
          <option value="en"> English </option>
          <option value="hr"> Hrvatski </option>
        </select>
      </nav>
    );
  }
}