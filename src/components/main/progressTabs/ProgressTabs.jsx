import style from './ProgressTabs.module.css';

export function ProgressTabs({infoTabProgress}) {
    return (
        <div className={style.progressTabs}>
            <div className={style.headerTop}>
                <p>Star at:{infoTabProgress[0].createdAt}</p>
                <div>
                    {infoTabProgress[0].amblem} 
                    </div>
            </div>
            <h1>{infoTabProgress[0].title}</h1>
            <div className={style.textTabs}>
                <h2>{infoTabProgress[0].subtopic}</h2>
                <p>{infoTabProgress[0].text}</p>
            </div>
            <div className={style.ProgressBar}>
                <img src="/" alt="Progress-bar" />
                <div className={style.ProgressBarText}>
                    <p>Progress</p>
                    <p>{infoTabProgress[0].percentages}%</p>
                </div>

            </div>
            
        </div>
    );
}