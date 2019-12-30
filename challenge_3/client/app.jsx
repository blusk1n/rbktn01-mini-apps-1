
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            button : 0,
           
                name:"",
                email:"",
                password:"",
                line1:"",
                line2:"",
                city:"",
                state:"",
                zipCode:"",
                phone:"",
                nameonCard:"",
                cardNum:"",
                expMonth:"",
                expYear:"",
                cvv:"",

            
        }
        this.handleClicks = this.handleClicks.bind(this)
        this.nextClicks = this.nextClicks.bind(this)
        this.complete = this.complete.bind(this)
        this.F1change=this.F1change.bind(this)
    }


    handleClicks(e) {
        e.preventDefault()
        this.setState({
            button: 1
        })
    }
    nextClicks(e) {
        e.preventDefault()
        this.setState({
            button: this.state.button+=1
        })
    }
    complete(e){
        e.preventDefault()
        this.setState({
            button : 0
        })
      
        axios.post('/',this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("failed");
          });
    }
    F1change(e){
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
   
    render(){
        
        return(

            <div>
                <h1>Please enter your information</h1>
               <button onClick={this.handleClicks}>Check Out</button>
               <button onClick={this.nextClicks}>next</button>
               {this.state.button === 1 && <F1 F1change = {this.F1change}/>}
               {this.state.button === 2 &&<F2 F1change = {this.F1change}/>}
               {this.state.button === 3 && <F3 F1change = {this.F1change}/>}
               {this.state.button > 3 && <Last complete={this.complete} />}
               
            </div>
        )
    }
}

class F1 extends React.Component{

    render(){
        return(
        <div>
            <form>
            <input type="text"  name="name" placeholder="name..." onChange={this.props.F1change}></input>
            <input type="text"  name ="email" placeholder="E-mail..." onChange={this.props.F1change}></input>
            <input type="password"  name ="password" placeholder="account password..." onChange={this.props.F1change}></input>
            </form>
        </div>
        )
    }
}
 
class F2 extends React.Component{

    render(){
        return(
        <div>
            <h1>ship to address</h1>
            <form>
            <input type="text"  name="line1" placeholder="line 1..." onChange={this.props.F1change}></input>
            <input type="text"  name ="line2" placeholder="line 2..." onChange={this.props.F1change}></input>
            <input type="text"  name ="city" placeholder="city..." onChange={this.props.F1change}></input>
            <input type="text"  name ="state" placeholder="state..." onChange={this.props.F1change}></input>
            <input type="text"  name ="zipCode" placeholder="zip code..." onChange={this.props.F1change}></input>
            <input type="text"  name ="phone" placeholder="phone number..." onChange={this.props.F1change}></input>
            </form>
        </div>
        )
    }
}

class F3 extends React.Component{

    render(){
        return(
        <div>
            <h1>please enter you credit card information</h1>
            <form>
            <input type="text"  name="nameonCard" placeholder="Name on Card..." onChange={this.props.F1change}></input>
            <input type="text"  name ="cardNum" placeholder="Credit card number..." onChange={this.props.F1change}></input>
            <input type="text"  name ="expMonth" placeholder="Exp Month..." onChange={this.props.F1change}></input>
            <input type="text"  name ="expYear" placeholder="Exp Year..." onChange={this.props.F1change}></input>
            <input type="text"  name ="cvv" placeholder="CVV..." onChange={this.props.F1change}></input>
            </form>
        </div>
        )
    }
}
class Last extends React.Component{
    constructor(props){
        super(props)
    }
 
    render(){
        return(
            <div>
                <h1>ty for your trust your item will be shipped in 14 day</h1>
                <button onClick={this.props.complete }>Purchase</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))