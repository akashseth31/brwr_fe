export default function ProjectPage({ name = '', version = 0, upgradeVesionFn = null }) {
  return (
    <>
      <h1>{name} version {version}</h1>
      <button onClick={upgradeVesionFn}>Upgrade Version</button>
    </>
  );
}
