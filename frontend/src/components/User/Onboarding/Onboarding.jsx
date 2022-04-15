import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper'
import { Link } from 'react-router-dom';
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import './Onboarding.css'

export default class App extends Component {
    constructor() {
        super();
    
        this.state = {
            name: 'React',
        };
    }

  componentDidMount() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
  }

  onSubmit(e) {
    e.preventDefault()
  }

  handleGoToHome(e) {
    e.preventDefault();
   //return navigate('/search-person');
  }

  render() {
    return (
      <div>
        <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header">
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger">
                <span className="bs-stepper-circle">1</span>
              </button>
            </div>
            <div className="line" id='line' value={0} max={100}></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger">
                <span className="bs-stepper-circle">2</span>
              </button>
            </div>
            <div className="line"></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger">
                <span className="bs-stepper-circle">3</span>
              </button>
            </div>
          </div>

          <div className="bs-stepper-content">
            <div id="test-l-1" className="content">
              <Step1/>
              <button className="btn-1" onClick={() => this.stepper.next()}>Seguir para o cadastro</button>
            </div>

            <div id="test-l-2" className="content">
              <Step2 next={() => this.stepper.next()}/>
            </div>

            <div id="test-l-3" className="content">
              <Step3/>
              <button className="btn-1"><a href="/login">Fazer Login</a></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}