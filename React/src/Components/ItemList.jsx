const ItemList = ({ list }) => {

    return (
      <>
        <div className="p-4">
          <ul>
            {
              list.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
      </>
    )
  }

  export default ItemList;