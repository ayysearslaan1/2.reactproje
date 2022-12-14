import React, { Component } from 'react'

 class user extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text"/>
            <button>Gönder</button>
        </form>
      </div>
    )
  }
}
export default user;



import React, { Component } from 'react'

 class user extends Component {
  render() {
    return (
      <div>
      <ul>
        <li>isim: {this.props.name}</li>
        <li>Departman:{this.props.salary}</li>
      </ul>
      </div>
    )
  }
}


