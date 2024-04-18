// TODO: Create a `name` variable

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React

const name = 'Khoi';
const thoughts = 'heo map hom nay an mi quang';


function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {name}
          <h1>Hi! My name is ({name})</h1>
          {name.length}
          <h2>My name has ({name.length}) letters</h2>
          {thoughts}
          <h2>I think React ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
