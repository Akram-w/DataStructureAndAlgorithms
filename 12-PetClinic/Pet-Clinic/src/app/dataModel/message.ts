export class Message {
    private _type: string;
    private _message: string;

    static readonly MessageTypes = {
        success: "success",
        danger: "danger",
    }
    constructor(type: string, message: string) {
        this._type = type;
        this._message = message;
    }


    public get type(): string {
        return this._type;
    }

    public get message(): string {
        return this._message;
    }


}