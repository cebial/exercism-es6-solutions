class Clock {
  constructor(hours, minutes) {
    this.mins = hours * 60 + (minutes || 0);
  }

  plus(m) {
    this.mins = (((this.mins + m) % 1440) + 1440) % 1440;
    return this;
  }

  minus(m) {
    return this.plus(-m);
  }

  toString() {
    return ('0' + ((this.mins / 60) | 0)).slice(-2)
      + ':' + ('0' + this.mins % 60).slice(-2);
  }

  equals(otherClock) {
    return this.mins === otherClock.mins;
  }
}

export default (h, m) => new Clock(h, m);

