import style from './ProgressTabs.module.css';

export function ProgressTabs() {
    return (
        <div className={style.progressTabs}>
            <div className={style.headerTop}>
                <p>Date</p>
                <img src="/" alt="Amblem" />
            </div>
            <h1>Text</h1>
            <div className={style.textTabs}>
                <h2>text</h2>
                <p>text</p>
            </div>
            <div className={style.ProgressBar}>
                <img src="/" alt="Progress-bar" />
                <div className={style.ProgressBarText}>
                    <p>Progress</p>
                    <p>20%</p>
                </div>

            </div>
            
        </div>
    );
}