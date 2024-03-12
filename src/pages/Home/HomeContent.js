import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomeContent() {
    return (
        <div className={cx('content')}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 540: 2, 720: 3, 960: 4, 1140: 5, 1320: 6 }}>
                <Masonry gutter="1.5rem">
                    <img
                        alt=""
                        src="https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
                    />
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1677526496579-a814d126fc78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1549492423-400259a2e574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1542684377-0b875fde9563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
                    />
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1677526496579-a814d126fc78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1549492423-400259a2e574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1542684377-0b875fde9563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
                    />
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1677526496579-a814d126fc78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1549492423-400259a2e574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1542684377-0b875fde9563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://media.istockphoto.com/id/1716501112/photo/glittering-gold-particles-and-light-beams-abstract-background-christmas-award-celebration.webp?b=1&s=170667a&w=0&k=20&c=Ap0soVCKyQl1TaNyxfevgvzO8AcGjYRWr6YiBPifg-4="
                    />
                    <img
                        alt=""
                        src="https://plus.unsplash.com/premium_photo-1677526496579-a814d126fc78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1549492423-400259a2e574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1542684377-0b875fde9563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                    />
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}

export default HomeContent;
