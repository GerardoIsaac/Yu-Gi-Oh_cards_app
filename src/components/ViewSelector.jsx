const ViewSelector = ({ view, setView }) => {
  const handleChange = e => {
    setView(e.target.value);
  };

  return (
    <>
      <p className='fs-5 text-start'>View:</p>

      <div className='btn-group'>
        <input
          type='radio'
          className='btn-check'
          name='btn-radio'
          id='btn-radio1'
          value='G'
          checked={view === 'G'}
          onChange={handleChange}
        />
        <label className='btn btn-outline-primary' htmlFor='btn-radio1'>
          Grid
        </label>

        <input
          type='radio'
          className='btn-check'
          name='btn-radio'
          id='btn-radio2'
          value='L'
          checked={view === 'L'}
          onChange={handleChange}
        />
        <label className='btn btn-outline-primary' htmlFor='btn-radio2'>
          List
        </label>
      </div>
    </>
  );
};

export default ViewSelector;
