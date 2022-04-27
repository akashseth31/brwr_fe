import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLayout } from '../../components/common/Layout';
import { upgradeVersion } from '../../store/project/action';
import ProjectPage from '../../components/page/Project';

const Project = ({ upgradeVersion }) => {
  const { project } = useSelector(state => state);

  return (
    <ProjectPage
      name={project.name}
      version={project.version}
      upgradeVesionFn={upgradeVersion}
    ></ProjectPage>
  );
};

Project.propTypes = {
  upgradeVersion: PropTypes.func,
};

// adding a layout to the page
Project.getLayout = getLayout;

const mapDispatchToProps = (dispatch) => {
  return {
    upgradeVersion: bindActionCreators(upgradeVersion, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Project);
