import Projects from "./Projects";
import Uiux from "./uiux";


const Mainpg = () => (
    <div>
<div className="h-screen bg-slate-400">
    full stack and frontend projects
</div>
        <Projects/>
        <div className="h-screen bg-slate-400">
 Ui / Ux projects
</div>
        <Uiux/>
    </div>
);
export default Mainpg;