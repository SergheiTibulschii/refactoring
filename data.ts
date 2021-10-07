import {IInvoice, IPlay, PlayByIdType} from "./interfaces";

export const playTypes = ['tragedy', 'comedy'] as const;

export const plays: PlayByIdType = {
    "hamlet": { name: "Hamlet", type: 'tragedy' },
    "as-like": { name: "As You Like It", type: 'comedy' },
    "othello": { name: "Othello", type: 'tragedy' },
}

export const invoices: IInvoice[] = [
    {
        customer: "BigCo",
        performances: [
            { playID: "hamlet", audience: 55 },
            { playID: "as-like", audience: 35 },
            { playID: "othello", audience: 40 },
        ]
    }
]