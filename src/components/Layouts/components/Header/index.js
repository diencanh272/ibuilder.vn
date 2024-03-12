import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faBell,
    faCommentDots,
    faUser,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SuggestResult from '~/components/SuggestResult';
// import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const handleChangeInputSearch = () => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 100);
    };
    useEffect(() => {}, []);

    return (
        <header className={cx('container', 'wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="iBuilder" />
                    <h1>iBuild.vn</h1>
                </Link>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <div className={cx('search-popper')}>
                                    <h3 className={cx('search-title')}>Ý tưởng dành cho bạn</h3>
                                    <div className={cx('row row-cols-3')}>
                                        {/**Idea1 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>

                                        {/**Idea2 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>

                                        {/**Idea3 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>

                                        {/**Idea4 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>

                                        {/**Idea4 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>

                                        {/**Idea4 */}
                                        <div className={cx('col')}>
                                            <SuggestResult />
                                        </div>
                                    </div>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm..." spellCheck={false} onClick={handleChangeInputSearch} />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/**loading icons */}
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('account')}>
                    <div className={cx('account-notification')}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>

                    <div className={cx('account-message')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </div>

                    <div className={cx('account-user')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className={cx('account-help')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
