// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FundsDistributed extends ethereum.Event {
  get params(): FundsDistributed__Params {
    return new FundsDistributed__Params(this);
  }
}

export class FundsDistributed__Params {
  _event: FundsDistributed;

  constructor(event: FundsDistributed) {
    this._event = event;
  }

  get rs2Share(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rs3Share(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  controller(): Address {
    let result = super.call("controller", "controller():(address)", []);

    return result[0].toAddress();
  }

  try_controller(): ethereum.CallResult<Address> {
    let result = super.tryCall("controller", "controller():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ps(): BigInt {
    let result = super.call("ps", "ps():(uint128)", []);

    return result[0].toBigInt();
  }

  try_ps(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ps", "ps():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rs2(): Address {
    let result = super.call("rs2", "rs2():(address)", []);

    return result[0].toAddress();
  }

  try_rs2(): ethereum.CallResult<Address> {
    let result = super.tryCall("rs2", "rs2():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rs3(): Address {
    let result = super.call("rs3", "rs3():(address)", []);

    return result[0].toAddress();
  }

  try_rs3(): ethereum.CallResult<Address> {
    let result = super.tryCall("rs3", "rs3():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdc(): Address {
    let result = super.call("usdc", "usdc():(address)", []);

    return result[0].toAddress();
  }

  try_usdc(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdc", "usdc():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _rs2(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rs3(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ps(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DistributeFundsCall extends ethereum.Call {
  get inputs(): DistributeFundsCall__Inputs {
    return new DistributeFundsCall__Inputs(this);
  }

  get outputs(): DistributeFundsCall__Outputs {
    return new DistributeFundsCall__Outputs(this);
  }
}

export class DistributeFundsCall__Inputs {
  _call: DistributeFundsCall;

  constructor(call: DistributeFundsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DistributeFundsCall__Outputs {
  _call: DistributeFundsCall;

  constructor(call: DistributeFundsCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _rs2(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rs3(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _ps(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _usdc(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}
