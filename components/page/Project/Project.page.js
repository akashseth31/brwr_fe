import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectPage({ name, version, upgradeVesionFn }) {
  return (
    <>
      <h1>{name} version {version}</h1>
      <button onClick={upgradeVesionFn}>Upgrade Version</button>
    </>
  );
}

ProjectPage.propTypes = {
  name: PropTypes.string,
  version: PropTypes.number.isRequired,
  upgradeVesionFn: PropTypes.func.isRequired,
};

ProjectPage.defaultProps = {
  name: 'Default Text',
};
