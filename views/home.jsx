const React = require('react') 
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <a href='/breads'><button>Browse Breads</button></a>
                <a href="/breads/new"><button>Add a new bread</button></a>
            </main>
        </Def>
    )
}

module.exports = home