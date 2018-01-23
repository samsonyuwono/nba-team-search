import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTeams } from '../../actions/teams'
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../assets/Table.css'

class TeamStandings extends Component{

  componentDidMount(){
    this.props.getTeams()
  }

  render(){
      const sortedTeamWins = this.props.teams.sort((a,b) => { return b.wins - a.wins})

      // const teamStandings = sortedTeamWins.map(team => {
      //   return <tr key={team.id}>{team.name} {team.wins} - {team.losses} {(team.wins/(team.wins + team.losses)).toFixed(3)}</tr>
      // });
    return(
        <div className="table">
             <BootstrapTable data={this.props.teams} bordered={true} height='120px' className='tr-style' height='500px'>

              <TableHeaderColumn dataField='id'
              isKey hidden>
                ID
              </TableHeaderColumn>

              <TableHeaderColumn
                  dataField='name'
                  dataAlign='right'
                  headerAlign="right"
                  width="150"
                  >
                  Name
                </TableHeaderColumn>

               <TableHeaderColumn dataField='wins'
                dataAlign='right'
                headerAlign="right"
                width="150"
                >
                 Wins
               </TableHeaderColumn>

               <TableHeaderColumn dataField='losses'
                  dataAlign='right'
                  headerAlign="right"
                  width="150"
                  >
                 Losses
               </TableHeaderColumn>

             </BootstrapTable>
            </div>

    )
  }
}

const mapStateToProps = (state) => {
  return ({
    teams: state.teams
  })
}

export default connect (mapStateToProps, {getTeams})(TeamStandings)
