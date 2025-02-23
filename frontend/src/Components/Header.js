import React  from 'react'


const Header = ({names, inputChange, searchRecipe}) => {
   
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-1 text-center">Food Recipe</h1>
                <div class="input-group w-50 mx-auto">
                    <input type="text" class="form-control" placeholder="Search Your Recepe" value={names} onChange={inputChange} />
                    <div className="input-group-append">
                        <button className="btn btn-dark" onClick={()=>{searchRecipe()}}>Search </button>
                    </div>

                </div>
            </div>
        </>
    )
};
export default Header;