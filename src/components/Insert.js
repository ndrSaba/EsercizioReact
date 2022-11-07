const Insert = ({ name, lastname, onChangeName, onChangeLastname, onAdd }) => (
    <div className="Add">
        <div>
            <div>
                <label>NAME</label>
            </div>
            <div>
                <input type="text" value={name} onChange={onChangeName} />
            </div>
        </div>
        <div>
            <div>
                <label>LASTNAME</label>
            </div>
            <div>
                <input type="text" value={lastname} onChange={onChangeLastname} />
            </div>
        </div>
        <button type="button" onClick={onAdd}>
            Add
        </button>
    </div>
);


export default Insert;