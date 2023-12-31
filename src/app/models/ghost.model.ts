export class Ghost {
    name!: string;
    evidence!: string[];
    sanity!: {
        min: number,
        normal: number,
        max: number,
        condition: string
    }
    speed!: {
        min: number,
        normal: number,
        max: number,
        condition: string
    }
}
