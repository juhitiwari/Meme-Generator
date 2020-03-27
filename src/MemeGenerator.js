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
        this.handleClick=this.handleClick.bind(this)
        this.generate=this.generate.bind(this)
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

    handleClick(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }

    generate(){

    }


    render(){
        return(
            <div>
                <form className='meme-form'>
                    <input type='text'
                     value={this.state.topText}
                     name='topText' 
                     onChange={this.handleClick}
                     placeholder='Top Text'/>

                    <input type='text'
                     value={this.state.bottomText}
                     name='bottomText' 
                     onChange={this.handleClick}
                     placeholder='Bottom Text'/>

                    <button onClick={this.generate}>Generate</button>

                </form>
                <div className='meme'>
                    <img src={this.state.image} alt=''/>
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>

                </div>

            </div>
        )
            
        
    }


}


export default MemeGenerator