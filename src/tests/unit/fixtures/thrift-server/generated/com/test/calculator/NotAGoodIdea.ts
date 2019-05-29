/* tslint:disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.6.2
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as CommonStruct from "./CommonStruct";
import * as TypedMap from "./TypedMap";
export interface INotAGoodIdea {
    __name: "NotAGoodIdea";
    message?: string;
    data?: TypedMap.TypedMap;
}
export interface INotAGoodIdeaArgs {
    message?: string;
    data?: TypedMap.TypedMap;
}
export const NotAGoodIdeaCodec: thrift.IStructCodec<INotAGoodIdeaArgs, INotAGoodIdea> = {
    encode(args: INotAGoodIdeaArgs, output: thrift.TProtocol): void {
        const obj = {
            message: args.message,
            data: args.data
        };
        output.writeStructBegin("NotAGoodIdea");
        if (obj.message != null) {
            output.writeFieldBegin("message", thrift.TType.STRING, 1);
            output.writeString(obj.message);
            output.writeFieldEnd();
        }
        if (obj.data != null) {
            output.writeFieldBegin("data", thrift.TType.MAP, 2);
            output.writeMapBegin(thrift.TType.STRING, thrift.TType.STRUCT, obj.data.size);
            obj.data.forEach((value_1: CommonStruct.ICommonStructArgs, key_1: string): void => {
                output.writeString(key_1);
                CommonStruct.CommonStructCodec.encode(value_1, output);
            });
            output.writeMapEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): INotAGoodIdea {
        let _args: any = {};
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
                        const value_2: string = input.readString();
                        _args.message = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.MAP) {
                        const value_3: Map<string, CommonStruct.ICommonStruct> = new Map<string, CommonStruct.ICommonStruct>();
                        const metadata_1: thrift.IThriftMap = input.readMapBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const key_2: string = input.readString();
                            const value_4: CommonStruct.ICommonStruct = CommonStruct.CommonStructCodec.decode(input);
                            value_3.set(key_2, value_4);
                        }
                        input.readMapEnd();
                        _args.data = value_3;
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
        return {
            __name: "NotAGoodIdea",
            message: _args.message,
            data: _args.data
        };
    }
};
export class NotAGoodIdea extends thrift.StructLike implements INotAGoodIdea {
    public message?: string;
    public data?: TypedMap.TypedMap;
    public readonly __name = "NotAGoodIdea";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: INotAGoodIdeaArgs = {}) {
        super();
        if (args.message != null) {
            const value_5: string = args.message;
            this.message = value_5;
        }
        if (args.data != null) {
            const value_6: Map<string, CommonStruct.ICommonStruct> = new Map<string, CommonStruct.ICommonStruct>();
            args.data.forEach((value_7: CommonStruct.ICommonStructArgs, key_3: string): void => {
                const value_8: CommonStruct.ICommonStruct = new CommonStruct.CommonStruct(value_7);
                const key_4: string = key_3;
                value_6.set(key_4, value_8);
            });
            this.data = value_6;
        }
    }
    public static read(input: thrift.TProtocol): NotAGoodIdea {
        return new NotAGoodIdea(NotAGoodIdeaCodec.decode(input));
    }
    public static write(args: INotAGoodIdeaArgs, output: thrift.TProtocol): void {
        return NotAGoodIdeaCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return NotAGoodIdeaCodec.encode(this, output);
    }
}
