import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import PartyMembers from './PartyMembers';
import s from '../assets/s.png';
import m from '../assets/m.png';
import c from '../assets/c.png';
import v from '../assets/v.png';
import mp from '../assets/mp.png';
import kd from '../assets/kd.png';
import sd from '../assets/sd.png';
import l from '../assets/l.png';


export default class Party extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParty: this.props.match.params.parti,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.parti !== this.state.selectedParty){
      this.setState({
        selectedParty: nextProps.match.params.parti
      })
    }
  }

  render() {
    return (
    <div>
      <div className="partyMenu">
        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/V'}} activeClassName={"active"}>
          <Button outline color="danger" ><img src={v} id="logo" alt="vänsterpartiet"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/S'}} activeClassName={"active"}>
          <Button outline color="danger" ><img src={s} id="logo" alt="socialdemokraterna"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/MP'}} activeClassName={"active"}>
          <Button outline color="success" ><img src={mp} id="logo" alt="miljöpartiet"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/C'}} activeClassName={"active"}>
          <Button outline color="success" ><img src={c} id="logo" alt="centerpartiet"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/L'}} activeClassName={"active"}>
          <Button outline color="primary" ><img src={l} id="logo" alt="liberalerna"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/M'}} activeClassName={"active"}>
          <Button outline color="info" ><img src={m} id="logo" alt="moderaterna"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/KD'}} activeClassName={"active"}>
          <Button outline color="primary" ><img src={kd} id="logo" alt="kristdemokraterna"/></Button>
        </NavLink>

        <NavLink to={{ pathname: '/Riksdagsledamoter-partier/SD'}} activeClassName={"active"}>
          <Button outline color="warning" ><img src={sd} id="logo" alt="sverigedemokraterna" /></Button>
        </NavLink>
        </div>
      <div>
        <PartyMembers selectedParty={this.state.selectedParty}/>
      </div>
    </div>
    );
  }
}
