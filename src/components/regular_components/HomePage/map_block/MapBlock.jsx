import React from 'react';
import classes from './MapBlock.module.css'

const MapBlock = () => {
    return (
        <div className={classes.main_map_styles}>
            <iframe
                title="This is a unique title"
                src="https://yandex.ru/map-widget/v1/-/CCUfYKSnoA"
                className={classes.map_iframe}
            />
        </div>
    );
};

export default MapBlock;