import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(name) {
    super()
    this.name = name;
    this.time = 0;
    this.isRunning = false;
  }
}

var myTimer = new Timer('Workout');