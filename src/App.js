import { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { searchQuery, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search for a monster..."
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
