export default function twoCrystalBalls(breaks: boolean[]): number {
    if (!breaks.length) return -1;
    const step = Math.floor(Math.sqrt(breaks.length));
    let currentStep = step;
    let current = 0;

    while (currentStep < breaks.length) {
        if (breaks[currentStep]) break;
        else currentStep += step;
    }

    current = currentStep - step;
    while (current <= currentStep && current < breaks.length) {
        if (breaks[current]) return current;
        current++;
    }
    return -1;
}
