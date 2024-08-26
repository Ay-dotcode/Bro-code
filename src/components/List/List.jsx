import PropTypes from 'prop-types';
import styles from './List.module.css';

function List(props) {
    const Items = props.items;
    if (!props.items.length)
        return null;
    const category = props.category;

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

List.defaultProps = {
    category: 'Category',
    items: [],
};

export default List;