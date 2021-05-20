import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import { NavLink } from 'react-router-dom';
const url = 'http://data.riksdagen.se/personlista/?utformat=json';


export default class PartyMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParty: this.props.selectedParty,
    }
  }

  componentDidMount() {
    this.getPartyMembersData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedParty !== prevProps.selectedParty) {
      const member = this.state.partyMembers.filter((person) => {
        return person.parti === this.props.selectedParty
      })
      this.setState({
        partyFiltered: member,
      })
    }
  }

  sortParty() {
    const member = this.state.partyMembers;
    member.sort(function(a, b) {
      const objectA = a.parti;
      const objectB = b.parti;
      return (objectA < objectB) ? -1 : (objectA > objectB) ? 1 : 0;
    });
    this.setState({
      partyFiltered: member
    })
  }

  getPartyMembersData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const jsonResponse = await response.json();
        this.setState({
          partyMembers: jsonResponse.personlista.person,
          partyFiltered: jsonResponse.personlista.person
        });
      } else {
        throw new Error('Request failed!');
      }
    } catch(error) {
      console.log(error);
    }
    this.sortParty();
  };

  render() {
    const { partyFiltered } = this.state;
    if(!partyFiltered) {
      return <Spinner className="spinner" color="dark" /> ;
    } else {
    return (
      <div className="body">
        <div className="title">
          <NavLink to={{ pathname: '/'}} style={{color: "#1B506F", fontWeight: "bold"}}>Alla ledamöter</NavLink>
        </div>

        <div className="title">
          <h4>Riksdagsledamöter {this.props.selectedParty && ` - ${this.props.selectedParty}`}</h4>
        </div>

          <ul>
           <div className="box">
            {partyFiltered.map(person =>
            <div className="ledamot" key={person.intressent_id}>
            <li key={person.sourceid}>
                <img className="image" src={person.bild_url_192} alt="ledamotbild"/>
                 <div className="name">
                  {person.sorteringsnamn} ({person.parti})
                </div>
              </li>
            </div>
           )}
          </div>
        </ul>
      </div>
      )
    }
  }
}
