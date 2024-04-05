import "./skillbar.scss";
const SkillBar = ({ image, name }) => {
  return (
    <div className="skills">
      <div className="skillIcon">{image}</div>
      <p>{name}</p>
    </div>
  );
};

export default SkillBar;
