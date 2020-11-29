import React from "react"




const SearchBox = (props) => {
  const [text, setText] = React.useState("")

  function handleChange(event) {
    const value = event.target.value
    setText(value)
    props.search(text)
  }



  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Search Your Favouriate ANIME" value={text} />
      <span>
        <button id="search-btn">Search</button>
      </span>
    </div>
  )
}

export default SearchBox
