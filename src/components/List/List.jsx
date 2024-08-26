import PropTypes from 'prop-types';
import styles from './List.module.css';

function List(props) {
    const category = props.category;
    const Items = props.items;

    const listItems = Items.map((item) =>
        <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return (
        <>
            <h3 className={styles['list-category']}>{category}</h3>
            <ul className={styles['list-items']}>{listItems}</ul>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};

export default List;