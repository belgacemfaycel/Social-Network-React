import PostService from "../../services/post.service";
import React, { Component } from "react";
import Cart from '../../components/shared/Card/card'
import '../../utlis/styles/dashboard.css'
export default class  Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: []
        };
      }
    
      componentDidMount() {
        PostService.getPost().then(
            response =>{
                this.setState({
                    content : response.data
                })
            }
        )
    }
render(){

    const  content  = this.state?.content;
    console.log(content); 
    return (
        <div className='lmj-dashbord-list'>
        <ul className='lmj-card-list'>
        {content.map( item=>(
            <Cart 
								description={item?.description}
								imageUrl={'http://localhost:4200/images/P_465425_P_1_PRODUIT.jpg1647178817074.jpg'}
								title={item?.title}
								_id={item?._id}
            />

            )
        )}
        </ul>



        </div>
    )

}
}
    
