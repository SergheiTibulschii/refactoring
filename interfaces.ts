import {playTypes} from "./data";

export type PlayType = typeof playTypes[number];

export interface IPlay {
    name: string;
    type: PlayType;
}

export type PlayByIdType = {
    [key: string]: IPlay
}

interface IPerformance {
    playID: string;
    audience: number;
}

export interface IInvoice {
    customer: string;
    performances: IPerformance[];
}