import githubBlack from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={githubBlack} alt="GitHub logo" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;