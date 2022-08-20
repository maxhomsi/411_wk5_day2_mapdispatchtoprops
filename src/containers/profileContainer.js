import  {connect} from 'react-redux'
import profileComponent from '../components/profileComponent.js'
import { removeCar, addCar } from '../redux/actions'


const mapStoreToProps = (state) => {
    return{
        hello : state.hello
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    addCar: (car) => dispatch(addCar(car)),
    removeCar: (index) => dispatch (removeCar(index))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(profileComponent)