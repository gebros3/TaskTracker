const TaskRow = ({ item, onDelete }) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.date}</td>
    <td style={{ textAlign: 'right' }}>
      <button
        type="button"
        onClick={() => onDelete(item)}
        aria-label={`Delete ${item.name}`}
        title="Delete"
        className="icon-btn"
      >
        ×
      </button>
    </td>
  </tr>
);

const Table = ({list, onDelete}) => {
    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Task</th>
                <th>Due Date</th>
            </tr>
            </thead>
            <tbody>
            {list.map((item)=> 
                (<TaskRow item = {item} onDelete = {onDelete}/>)
            )}
            </tbody>
        </table>
    </div>);
}

export default Table;
