import classNames from 'classnames/bind';
import styles from './SuggestResult.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SuggestResult() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('thumb')}
                src="https://i.pinimg.com/236x/be/89/de/be89de7b329999365ea6c76d2a8f3117.jpg"
                alt="dlph0132"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Ngoại thất hiện đại
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
            </div>
        </div>
    );
}

export default SuggestResult;
