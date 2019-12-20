import { connect } from 'react-redux'
import App from '../../components/MainApp/App'
const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const MainApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default MainApp
