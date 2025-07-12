export default function two_crystal_balls(breaks: boolean[]): number {
    if (breaks.length === 0) return -1;

    const step = Math.floor(Math.sqrt(breaks.length));
    let currentStep = step;
    let current = 0;

    // First ball: jump by step until we find a break or reach the end
    while (currentStep < breaks.length) {
        if (breaks[currentStep]) {
            break;
        }
        currentStep += step;
    }

    // Second ball: linear search from previous position
    current = currentStep - step;
    while (current <= currentStep && current < breaks.length) {
        if (breaks[current]) {
            return current;
        }
        current++;
    }

    return -1;
}
