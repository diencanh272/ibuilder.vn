import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <Button to={'/'}>Dành cho bạn</Button>
            </div>
            <div className={cx('item')}>
                <Button to={'/news'}>Tin tức</Button>
            </div>
            <div className={cx('item')}>
                <Button to={'/upload'}>Sản phẩm mới</Button>
            </div>
        </div>
    );
}

export default Navbar;
