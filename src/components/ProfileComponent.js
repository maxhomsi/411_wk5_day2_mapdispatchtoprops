import React from "react";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newCar: "",
    }
  }

handleChange = (e) => {
  this.setState ({
    newCar: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()

this.props.addCar(this.state.newCar)
  
this.setState({
  newCar: ""
})

}
  
  render() {
    return (
      <div>
        <h1>Ta foda!</h1>

        <form onSubmit={e => this. handleSubmit(e)}>
<input type= 'text' value={this. state. newCar} onChange={e => this.
handleChange(e)}/>
<input type='submit' />
</form>

         
        {this.props.cars.map((car, index) => {
          return <h2 key={index}>{car} </h2>;
        })}
      </div>
    );
  }
}

// const ProfileComponent = (props) => {
//   return (
//     <div>
//       <h1>Yay, our Profile dumb component</h1>
//     </div>
//   );
// };

export default ProfileComponent;
