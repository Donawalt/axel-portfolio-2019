import React from 'react'

const LoaderContent = () => (
  <section className="LoaderFrame">
    <span className="LoaderContent">
      <div className="LoaderTitle">
        <h1 className="Title">
          <span>AXEL DOS</span>
          <br/>
          <span>SANTOS</span>
        </h1>
      </div>
      <div className="LoaderChargement">
        <span className="tracking"></span>
      </div>
      <div className="LoaderSubTitle">
        <p className="SubTitle">comédien//réalisateur</p>
      </div>
    </span>
  </section>
);

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {onScreen : true};
  }

  componentDidMount(){
    setTimeout(
    function() {
      this.setState({onScreen: false});
      setTimeout(
      function() {
        document.querySelector('.LoaderConteneur').style.display = 'none';
      }.bind(this),
      1000
      );
    }
    .bind(this),
    3000
    );
  }

  render(){
    console.log('this');
    return <div  className={this.state.onScreen+""+' LoaderConteneur'}>{ this.state.onScreen ? <LoaderContent/> : ''}</div>;
  }
}

export default Loader
