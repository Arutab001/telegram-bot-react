import React, { useState } from 'react';
import classes from './MySelect.module.css'; // не забудьте подключить стили

const MySelect = ({onValueChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Choose bet');

    const toggleDropdown = () => setIsOpen(!isOpen);


    const handleSelect = (item, value) => {
        setSelectedItem(item);
        setIsOpen(false);
        onValueChange(value);
    };

    return (
        <div className={classes.select}>
            <input className={classes.select__input} type="hidden" name="selected" value={selectedItem} />
            <div
                className={`${classes.select__head} ${isOpen ? 'open' : ''}`}
                onClick={toggleDropdown}
                style={{
                    borderRadius: isOpen ? '24px 24px 0 0' : '24px'
                }}
            >
                {selectedItem}
            </div>
            <ul className={classes.select__list} style={{ display: isOpen ? 'block' : 'none' }}>
                <li value={100} className={classes.select__item_1} onClick={() => handleSelect('100$ GMEME', 100)}>
                    <strong> 100 </strong> $GMEME
                </li>
                <li value={250} className={classes.select__item_2} onClick={() => handleSelect('250$ GMEME', 250)}>
                    <strong> 250 </strong> $GMEME
                </li>
                <li value={500} className={classes.select__item_1} onClick={() => handleSelect('500$ GMEME', 500)}>
                    <strong> 500 </strong> $GMEME
                </li>
                <li value={1000} className={classes.select__item_2} onClick={() => handleSelect('1000$ GMEME', 1000)}>
                    <strong> 1000 </strong> $GMEME
                </li>
                <li value={2500} className={classes.select__item_1} onClick={() => handleSelect('2500$ GMEME', 2500)}>
                    <strong> 2500 </strong> $GMEME
                </li>
                <li value={5000} className={classes.select__item_2} onClick={() => handleSelect('5000$ GMEME', 5000)}>
                    <strong> 5000 </strong> $GMEME
                </li>
                <li value={10000} className={classes.select__item_1} onClick={() => handleSelect('10000$ GMEME', 10000)}>
                    <strong> 10000 </strong> $GMEME
                </li>
            </ul>
        </div>
    );
};

export default MySelect;
