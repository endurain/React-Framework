import React from 'react';


class  Blog  extends  React.Component {
    constructor(){
        super();
        this.state  = {
            isOpen:  false,
            sections: [],
            current:  null,
            dataRoute:  "https://zacdevelopment.kinsta.cloud/wp-json/wp/v2/posts"
        }
    }
    render() {
        return (
        <div  className="App">


              <h1>Blog</h1>

        </div>);
    }


}

// const Blog = () => (
//   <div>
//     <h1>Blog</h1>
//   </div>
// );

export default Blog
