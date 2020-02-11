import React, { Component } from "react";

class Creadit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardnumber: "",
      valid: ""
    };
  }
  changecardnumber = e => {
    const numCard = /[^0-9]$/;
    let cardnum = e.target.value;
    if (!numCard.test(cardnum) && cardnum.length <= 16) {
      this.setState({ cardnumber: cardnum });
    }
  };
  formatcardnumber = () => {
    let str = String(this.state.cardnumber).padEnd(16, "*");
    return str
      .slice(0, 4)
      .concat(" ", str.slice(4, 8))
      .concat(" ", str.slice(8, 12).concat(" ", str.slice(12, 16)));
  };
  changecardname = e => {
    const cardname = /[a-zA-z]+$/;
    let nom = e.target.value;
    if (cardname.test(nom) && nom.length <= 20) {
      this.setState({ name: nom });
    } else {
      alert("this field should be a char");
    }
  };
  changevalid = e => {
    let val = /[^0-9]/;
    let valMonth = /[^0-1]/;
    let vad = e.target.value;
    if (
      !val.test(vad) &&
      vad.length <= 4 &&
      !e.target.value.slice(0, 1).match(valMonth) &&
      e.target.value.slice(0, 2) <= 12
    ) {
      
      this.setState({ valid: vad });
    }
  };
  formatdate = () => {
    let date = String(this.state.valid).padEnd(5, "*");
 
    return date
      .slice(0, 2)
      .concat(" ", "/")
      .concat(" ", date.slice(2, 4));
  };
  render() {
    return (
      <div className="information">
        <div className="creaditcart">
          <p className="title">Company name</p>
          <img src="https://media.istockphoto.com/vectors/gold-emv-chip-icon-for-bank-plastic-credit-or-debit-charge-card-vector-id1150374522?k=6&m=1150374522&s=170667a&w=0&h=tpOO4zLYbbzrkFTBeVvSyQ1zOop6ao9pLwLUTVKb0wI=" />
          <p className="number">
            {this.formatcardnumber(this.state.cardnumber)}
            {}
          </p>
          <p className="name">{this.state.name.toUpperCase()}</p>
          <p className="date">{this.formatdate(this.state.valid)}</p>
          <div className="bulles">
            <div className="bullerouge"></div>
            <div className="bullejaune"></div>
          </div>
          <span>mastercard</span>
        </div>
        <div className="inputs">
          <input
            placeholder="enter card number"
            onChange={this.changecardnumber}
            value={this.state.cardnumber}
          ></input>
          <input
            placeholder="enter card name"
            onChange={this.changecardname}
            value={this.state.name}
          ></input>
          <input
            placeholder="enter card date "
            onChange={this.changevalid}
            value={this.state.valid}
          ></input>
        </div>
      </div>
    );
  }
}
export default Creadit;
