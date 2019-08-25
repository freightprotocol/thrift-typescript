/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
export enum OtherCommonUnionType {
    OtherCommonUnionWithOption1 = "option1",
    OtherCommonUnionWithOption2 = "option2"
}
export type OtherCommonUnion = IOtherCommonUnionWithOption1 | IOtherCommonUnionWithOption2;
export interface IOtherCommonUnionWithOption1 {
    __name: "OtherCommonUnion";
    __type: OtherCommonUnionType.OtherCommonUnionWithOption1;
    option1: string;
    option2?: undefined;
}
export interface IOtherCommonUnionWithOption2 {
    __name: "OtherCommonUnion";
    __type: OtherCommonUnionType.OtherCommonUnionWithOption2;
    option1?: undefined;
    option2: number;
}
export type OtherCommonUnionArgs = IOtherCommonUnionWithOption1Args | IOtherCommonUnionWithOption2Args;
export interface IOtherCommonUnionWithOption1Args {
    option1: string;
    option2?: undefined;
}
export interface IOtherCommonUnionWithOption2Args {
    option1?: undefined;
    option2: number;
}
export const OtherCommonUnionCodec: thrift.IStructToolkit<OtherCommonUnionArgs, OtherCommonUnion> = {
    create(args: OtherCommonUnionArgs): OtherCommonUnion {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
        if (args.option1 != null) {
            _fieldsSet++;
            const value_1: string = args.option1;
            _returnValue = { option1: value_1 };
        }
        if (args.option2 != null) {
            _fieldsSet++;
            const value_2: number = args.option2;
            _returnValue = { option2: value_2 };
        }
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.option1 !== undefined) {
                return {
                    __name: "OtherCommonUnion",
                    __type: OtherCommonUnionType.OtherCommonUnionWithOption1,
                    option1: _returnValue.option1
                };
            }
            else {
                return {
                    __name: "OtherCommonUnion",
                    __type: OtherCommonUnionType.OtherCommonUnionWithOption2,
                    option2: _returnValue.option2
                };
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    },
    encode(args: OtherCommonUnionArgs, output: thrift.TProtocol): void {
        let _fieldsSet: number = 0;
        const obj: any = {
            option1: args.option1,
            option2: args.option2
        };
        output.writeStructBegin("OtherCommonUnion");
        if (obj.option1 != null) {
            _fieldsSet++;
            output.writeFieldBegin("option1", thrift.TType.STRING, 1);
            output.writeString(obj.option1);
            output.writeFieldEnd();
        }
        if (obj.option2 != null) {
            _fieldsSet++;
            output.writeFieldBegin("option2", thrift.TType.I32, 2);
            output.writeI32(obj.option2);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        return;
    },
    decode(input: thrift.TProtocol): OtherCommonUnion {
        let _fieldsSet: number = 0;
        let _returnValue: any = null;
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        _fieldsSet++;
                        const value_3: string = input.readString();
                        _returnValue = { option1: value_3 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.I32) {
                        _fieldsSet++;
                        const value_4: number = input.readI32();
                        _returnValue = { option2: value_4 };
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_fieldsSet > 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion cannot have more than one value");
        }
        else if (_fieldsSet < 1) {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.INVALID_DATA, "TUnion must have one value set");
        }
        if (_returnValue !== null) {
            if (_returnValue.option1 !== undefined) {
                return {
                    __name: "OtherCommonUnion",
                    __type: OtherCommonUnionType.OtherCommonUnionWithOption1,
                    option1: _returnValue.option1
                };
            }
            else {
                return {
                    __name: "OtherCommonUnion",
                    __type: OtherCommonUnionType.OtherCommonUnionWithOption2,
                    option2: _returnValue.option2
                };
            }
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read data for TUnion");
        }
    }
};
