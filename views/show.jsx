const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    return (
      <Default>
        <h2>Show Page</h2>
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
        </form>
        <h3>{bread.name}</h3>
        <p>
            and it 
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
             have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
      </Default>
    )
}

module.exports = Show