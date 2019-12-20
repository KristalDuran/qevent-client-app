import { connect } from 'react-redux'
import Home from '../../components/HomePage/index'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomePage