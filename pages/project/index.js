import { useSelector, connect } from 'react-redux';
import Layout from '../../components/Layout';
import { bindActionCreators } from 'redux';
import { upgradeVersion } from '../../store/project/action';

const Project = (props) => {
  const { project } = useSelector(state => state);
  return (
    <>
      <h1>{project.name} version {project.version}</h1>
      <button onClick={props.upgradeVersion}>Upgrade Version</button>
    </>
  );
}

// adding a layout to the page
Project.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    upgradeVersion: bindActionCreators(upgradeVersion, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Project)
