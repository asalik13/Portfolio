export default  ({ values, onChange }) => {
  return (
    <div className="control">
      <div className="control-icon">
        <i className="material-icons">&#xE152;</i>
      </div>
      <div className="select-arrow">
        <i className="material-icons">&#xE313;</i>
      </div>
      <select
        className="control-field filter-field form-control"
        onChange={onChange}
        defaultValue={values[0]}
      >
        {values.map((value, i) => (
          <option key={i} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
