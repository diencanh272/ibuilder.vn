import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Carousel from '~/components/Carousel';
import HomeContent from './HomeContent';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('homefeed')}>
            <Carousel />
            <HomeContent />
        </div>
    );
}

export default Home;
