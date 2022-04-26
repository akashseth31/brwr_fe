import { useSelector, connect } from 'react-redux';
import { getLayout } from '../../components/common/Layout';
import { bindActionCreators } from 'redux';
import { upgradeVersion } from '../../store/project/action';
import ProjectPage from '../../components/page/Project'

const Project = (props) => {
  const { project } = useSelector(state => state);
  const test;
  return (
    <ProjectPage
      name={project.name}
      version={project.version}
      upgradeVesionFn={props.upgradeVersion}
    />
  );
}

// adding a layout to the page
Project.getLayout = getLayout;

const mapDispatchToProps = (dispatch) => {
  return {
    upgradeVersion: bindActionCreators(upgradeVersion, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Project);
