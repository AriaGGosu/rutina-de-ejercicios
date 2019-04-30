import React from "react"
import "../styles/styles.css"



class Rutina extends React.Component {
    

    


    state={
        abs:0,
        pushUp:0,
        squats:0
    };
    
    handleClick= (e) => {
        switch(e.target.name){ 
            case "abs":
                this.setState({
                    abs:this.state.abs+=1
                })
                break;
            
            case "squats":
            this.setState({
                    squats:this.state.squats+=1
                })
                break;
                case "pushUp":
                this.setState({
                    pushUp:this.state.pushUp+=1
                })
                break;
            }
        }

    leftHandleClick = e => {
        switch(e.target.name){
            case "abs":
            this.setState({
                    abs:this.state.abs-=1
                })
                if(this.state.abs<0){
                    this.setState({
                            abs:this.state.abs*0
                        })
                    } 
            break;
            case "squats":
            this.setState({
                    squats:this.state.squats-=1
                })
                if(this.state.squats<=0){
                    this.setState({
                            squats:this.state.squats*0
                        })
                    }
                    break;
            case "pushUp":
            this.setState({
                    pushUp:this.state.pushUp-=1
                })
                if(this.state.pushUp<=0){
                        this.setState({
                            pushUp:this.state.pushUp*0
                        })
                    }
                    break;
               
                }
            }
    
            

    // sumarAbs = () => {
        //     this.setState({
    //         abs:this.state.abs +1
    
    //     })
    // }
    
    // restarAbs = () => {
    //     this.setState({
    //         abs:this.state.abs - 1
    //     })
    
    //     if(this.state.abs<=0){
    //         this.setState({
    //             abs:this.state.abs * 0
    //         })
    //     }
    // }
    
    
    render (){
        return(
            <div className="container-page">

                <div className="LinkContainer">
                    <div className="nameContainer">
                        <h2>{this.props.nameCharacter}</h2>
                    </div>
                        <div className="link-Exercise">
                            <div className="section-1">
                                <div className="containerExType">
                                    <label className="exerciseType">abdominales</label>
                                    <label>{this.state.abs}</label>
                                </div>
                                <div className="containerExType" >
                                    <label className="exerciseType">sentadillas</label>
                                    <label>{this.state.squats}</label>
                                </div>
                                <div className="containerExType" >
                                    <label className="exerciseType">flexiones</label>
                                    <label>{this.state.pushUp}</label>
                                </div>
                            </div>
                            <div className="section-2">
                                <div className="plusleAndMinum">
                                    <button onClick={this.leftHandleClick} name="abs" className="pamType">-</button>
                                    <button onClick={this.handleClick} name="abs" className="pamType">+</button>
                                </div>
                                <div className="squatsContainer">
                                    <button onClick={this.leftHandleClick} name="squats" className="pamType">-</button>
                                    <button onClick={this.handleClick} name="squats" className="pamType">+</button>´
                                </div>
                                <div className="push-upContainer">
                                    <button onClick={this.leftHandleClick} name="pushUp" className="pamType">-</button>
                                    <button onClick={this.handleClick} name="pushUp" className="pamType">+</button>
                                </div>
                            </div>

                        </div> 
                        <div className="containerTotal">
                            <label className="totalExercise">total exercise</label>
                            <label>{this.state.abs + this.state.squats + this.state.pushUp}</label>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Rutina;