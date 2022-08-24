import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         addCar: (car) => dispatch(addCar(car)),
//         removeCar: (index) => dispatch(removeCar(index))
//     }
// }
export default connect(mapStateToProps)(Home)
