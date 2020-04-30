import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Dropdown from "./Dropdown.js";

class StatsForm extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
          dropdownCountry: [{value: "eng", label: "England"},{value: "fra", label: "France"},
          {value: "ger", label: "Germany"},
          {value: "spa", label: "Spain"},
          {value: "ita", label: "Italy"}],
          dropdownLeague: [],
          dropdownFixture: []
      };
    }

    countryChangeHandler = (event) => {
      switch (event.target.value) {
        case "eng":
          this.setState({dropdownLeague: [{value: "epl", label: "Premier League"},{value: "efl", label: "Championship"},{value: "efl1", label: "League 1"},{value: "efl2", label: "League 2"}]});
          break;
        case "fra":
          this.setState({dropdownLeague: [{value: "lg1", label: "Ligue 1"},{value: "lg2", label: "Ligue 2"}]});
          break;
        case "ger":
          this.setState({dropdownLeague: [{value: "bdl", label: "Bundesliga"},{value: "bdl2", label: "2. Bundesliga"},{value: "bdl3", label: "3. Liga"}]});
          break;
        case "spa":
        this.setState({dropdownLeague: [{value: "lga", label: "La Liga"},{value: "sdv", label: "Segunda División"},{value: "sdvb", label: "Segunda División B"}]});
          break;
        case "ita":
          this.setState({dropdownLeague: [{value: "sera", label: "Serie A"},{value: "serb", label: "Serie B"}]});
          break;
        default:
        // do nothing
      }
      console.log(this.state)
    }


    leagueChangeHandler = (event) => {
      switch (event.target.value) {
        case "epl":
          this.setState({dropdownFixture: [{value: "norsou", label: "Norwich vs Southampton"},{value: "briars", label: "Brighton vs Arsenal"},{value: "newshe", label: "Newcastle vs Sheffield United"},{value: "livmci", label: "Liverpool vs Man City"}]});
          break;
        case "efl":
          this.setState({dropdownFixture: [{value: "lduwba", label: "Leeds United vs West Bromwich Albion"},{value: "fulbre", label: "Fulham vs Brentford"},{value: "notpre", label: "Notthingham Forest vs Preston North End"},{value: "brimil", label: "Bristol City vs Millwall"}]});
          break;
        case "bdl":
          this.setState({dropdownFixture: [{value: "baybor", label: "Bayern Munich vs Borussia Dortmund"},{value: "rblbmg", label: "RB Leipzig vs Borussia Monchengladbach"},{value: "blkfcs", label: "Bayer Leverkusen vs FC Shalke"},{value: "wolfre", label: "VFL Wolfsburg vs SC Freiburg"}]});
          break;
        case "lg1":
        this.setState({dropdownFixture: [{value: "psgmar", label: "PSG vs Marseille"},{value: "renlil", label: "Rennes vs Lille"},{value: "reinic", label: "Reims vs Nice"},{value: "lyomon", label: "Lyon vs Montpellier"}]});
          break;
        case "lga":
          this.setState({dropdownFixture: [{value: "barrmd", label: "Barcelona vs Real Madrid"},{value: "sevrsd", label: "Sevilla vs Real Sociedad"},{value: "getatl", label: "Getafe vs Atletico Madrid"},{value: "valvil", label: "Valencia vs Villareal"}]});
          break;
        case "sera":
          this.setState({dropdownFixture: [{value: "juvlaz", label: "Juventus vs Lazio"},{value: "intata", label: "Inter Milan vs Atalanta"},{value: "romnap", label: "Roma vs Napoli"}]});
          break;
        default:
        // do nothing
      }
    }

    fixtureChangeHandler = (event) => {
         switch (event.target.value) {
           case "norsou":
            this.props.changeFixture({homeTeam: "Norwich", awayTeam: "Southampton", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.7, away: 1.6}, btts: {home: 0.6, away: 2.6},under05: {home: 2.0, away: 2.2}, over8: {home: 1.8, away: 1.8}, over9: {home: 0.9, away: 1.7}, over10: {home: 0.5, away: 0.2}, ft: {home: 0.9, away: 1.5}, under5: {home: 0.6, away: 1.2}, tcards: {home: 1.4, away: 0.4}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
            break;
          case "briars":
            this.props.changeFixture({homeTeam: "Brighton", awayTeam: "Arsenal", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
            break;
          case "newshe":
            this.props.changeFixture({homeTeam: "Newcastle", awayTeam: "Sheffield United", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
            break;
          case "livmci":
            this.props.changeFixture({homeTeam: "Liverpool", awayTeam: "Manchester City", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
            break;
           case "lduwba":
             this.props.changeFixture({homeTeam: "Leeds United", awayTeam: "West Bromwich Albion", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
             break;
           case "fulbre":
             this.props.changeFixture({homeTeam: "Fulham", awayTeam: "Brentford", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
             break;
            case "notpre":
              this.props.changeFixture({homeTeam: "Nottingham Forest", awayTeam: "Preston North End", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "brimil":
              this.props.changeFixture({homeTeam: "Bristol City", awayTeam: "Milwall", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "baybor":
              this.props.changeFixture({homeTeam: "Bayern Munich", awayTeam: "Borussia Dortmund", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "rblbmg":
              this.props.changeFixture({homeTeam: "RB Leipzig", awayTeam: "Borussia Monchengladbach", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "blkfcs":
              this.props.changeFixture({homeTeam: "Bayer Leverkusen", awayTeam: "FC Shalke", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "wolfre":
              this.props.changeFixture({homeTeam: "VFL Wolfsburg", awayTeam: "SC Freiburg", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "psgmar":
              this.props.changeFixture({homeTeam: "Paris Saint Germain", awayTeam: "Marseille", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "renlil":
              this.props.changeFixture({homeTeam: "Rennes", awayTeam: "Lille", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "reinic":
              this.props.changeFixture({homeTeam: "Reims", awayTeam: "Nice", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "lyomon":
              this.props.changeFixture({homeTeam: "Lyon", awayTeam: "Montpellier", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "barrmd":
              this.props.changeFixture({homeTeam: "Barcelona", awayTeam: "Real Madrid", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "sevrsd":
              this.props.changeFixture({homeTeam: "Sevilla", awayTeam: "Real Sociedad", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "getatl":
              this.props.changeFixture({homeTeam: "Getafe", awayTeam: "Atletico Madrid", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "valvil":
              this.props.changeFixture({homeTeam: "Valencia", awayTeam: "Villareal", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "juvlaz":
              this.props.changeFixture({homeTeam: "Juventus", awayTeam: "Lazio", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "intata":
              this.props.changeFixture({homeTeam: "Inter Milan", awayTeam: "Atalanta", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            case "romnap":
              this.props.changeFixture({homeTeam: "Roma", awayTeam: "Napoli", stats: {over05: {home: 1.0, away: 1.2}, over15: {home: 0.8, away: 1.6},over25: {home: 1.0, away: 1.2}, btts: {home: 0.8, away: 1.6},under05: {home: 1.0, away: 1.2}, over8: {home: 0.8, away: 1.6}, over9: {home: 0.8, away: 1.6}, over10: {home: 0.8, away: 1.6}, ft: {home: 0.8, away: 1.6}, under5: {home: 0.8, away: 1.6}, tcards: {home: 0.8, away: 1.6}, gcards: {home: 0.8, away: 1.6}, winht: {home: 0.8, away: 1.6}, winft: {home: 0.8, away: 1.6}, rcard: {home: 0.8, away: 1.6}}})
              break;
            default:
            // do nothing
         }
    }

  render() {
    return (
      <Container fluid>
        <Row>
          <Form className="form2">


            <Col xs={2} className="stats-form">
              <Dropdown
              optionList={this.state.dropdownCountry}
              label="Country"
              changed={this.countryChangeHandler}
              />
            </Col>

            <Col xs={2} className="stats-form">
              <Dropdown
              optionList={this.state.dropdownLeague}
              label="League"
              changed={this.leagueChangeHandler}
              />
            </Col>

            <Col xs={2} className="stats-form">
              <Dropdown
              optionList={this.state.dropdownFixture}
              label="Fixture"
              changed={this.fixtureChangeHandler}
              />
            </Col>


          </Form>
        </Row>

      </Container>
    )
  }
}
export default StatsForm;
