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

    while (currentStep < breaks.length) {
        if (breaks[currentStep]) break;
        currentStep += step;
    }

    for (
        let i = currentStep - step;
        i <= currentStep && i < breaks.length;
        i++
    ) {
        if (breaks[i]) return i;
    }

    return -1;
}
