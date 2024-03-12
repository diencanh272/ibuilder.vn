import React, { useState } from 'react';
import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';

import image from '~/assets/images/BannerImg1.png';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const images = [image, image, image, image];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={cx('container')}>
            <Button className={cx('arrow-button')} onClick={handlePrev}>
                &lt;
            </Button>
            <div className={cx('image-wrap', 'row row-cols-4')}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={image}
                        className={cx('image', `${currentIndex === index ? 'active' : ''}`)}
                    />
                ))}
            </div>
            <Button className={cx('arrow-button')} onClick={handleNext}>
                &gt;
            </Button>
        </div>
    );
};

export default Carousel;
