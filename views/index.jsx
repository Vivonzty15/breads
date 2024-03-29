const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title})  {
    return (
      <Default title={title}>
        <aside>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return (
                            <li key={baker.id}>
                                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
        <h2>Breads</h2>
        <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        <ul>
            {
                breads.map((bread) => {
                    return (
                    <li key={bread.id}>
                        <a href= {`/breads/${bread.id}`}>
                            {bread.name}
                        </a>
                        <img src={bread.image} alt={bread.name} />
                    </li>
                    )
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index