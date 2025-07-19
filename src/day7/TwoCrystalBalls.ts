/**
 * Solve the two crystal balls problem.
 *
 * Given an array of booleans representing floors where balls break, find the exact floor where balls start breaking using only 2 crystal balls.
 * @param breaks - Array of booleans representing floors where balls break
 * @returns The exact floor where balls start breaking, or -1 if no floor breaks the balls
 */
export default function twoCrystalBalls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));
    let currentStep = step;
    let current: number;

    for (; currentStep < breaks.length; currentStep += step) {
        if (breaks[currentStep]) break;
    }
    current = currentStep - step;
    while (current <= currentStep && current < breaks.length) {
        if (breaks[current]) return current;
        current++;
    }
    return -1;
}
