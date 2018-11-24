import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { tableValues: [], loading: true };

    fetch('https://localhost:5001/api/values', {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
    })
      .then(response => {
        var responseJson = response.json();
        console.log(responseJson);
        return responseJson;
      })
      .then(data => {
        this.setState({ tableValues: data, loading: false });
      });
  }

  static renderTable(tableValues) {
    console.log("Table values:");
    console.log(tableValues);
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          {tableValues.map((tableValue, i) =>
            <tr key={i}>
              <td>{tableValue}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderTable(this.state.tableValues);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
