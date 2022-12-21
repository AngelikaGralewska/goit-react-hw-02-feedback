
import PropTypes from 'prop-types';
import style from './SectionTitle.module.css';

const SectionTitle = ({ title, children }) => {
    return (
      <section>
        <h2 className={style.sectionTitle}>{title}</h2>
        {children}
      </section>
    );
  };
  
  SectionTitle.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.element,
  };
  
  export default SectionTitle;