const TaskRow = ({ item, onDelete }) => {
  
  return(<tr>
    <td>{item.name}</td>
    <td style = {{color: comparePastDate(item.date) < 0 ? "red" : (comparePastDate(item.date) === 0 ? "yellow" : "green")}}>{item.date}</td>
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
  </tr>);
};

const comparePastDate = (date) => {
    let currentDate = new Date().toJSON().slice(0,10);
    return date.localeCompare(currentDate);
}
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
