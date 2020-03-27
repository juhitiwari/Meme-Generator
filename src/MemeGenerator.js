import React from 'react';

class MemeGenerator extends React.Component{

    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            image:'http://i.imgflip.com/1bij.jpg',
            allmemeimages:[]

        }
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response=>response.json())
            .then((response)=>{
                const {memes}=response.data
                this.setState({
                    allmemeimages:memes
                })
            })
    }


    render(){
        return(
            <h1>some api calls here</h1>
        )
            
        
    }


}


export default MemeGenerator