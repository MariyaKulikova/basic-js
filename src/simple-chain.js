import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const newValue = `( ${String(value)} )`;
    this.chain.push(newValue);
    return this;
  },
  removeLink( position ) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainStr = this.chain.join('~~');

    this.chain.splice(0, this.getLength());
    return chainStr;
  }
};

export default chainMaker;
