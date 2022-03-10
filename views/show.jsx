const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread }) {
  return (
    <Default>
      <h2>{bread.name}</h2>
      <p>{bread.getBakedBy()} </p>
      <img src={bread.image} alt={bread.name} />
      <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE" />
      </form>
    </Default>
  )
}

module.exports = Show