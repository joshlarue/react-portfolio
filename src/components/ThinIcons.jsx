import GridIcon from '../components/GridIcon';
import '../App.css';

function ThinIcons(props) {
  // figure out a map/filter loop so that the icon of current page does not show up in icon list 
  return (
    <div className='icon-grid icons-thin'>
    <GridIcon img='/react-portfolio/home.png'  desc='home' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/resume.png' desc='resume' handleHover={props.handleHover} /> 
    <GridIcon img='/react-portfolio/project.png' desc='proj1' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj2' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj3' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/project.png' desc='proj4' handleHover={props.handleHover} />
    <GridIcon img='/react-portfolio/blog.png' desc='blog' handleHover={props.handleHover} />
  </div>
  );
}

export default ThinIcons;