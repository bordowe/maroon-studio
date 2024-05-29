import { breakpoint } from "./theme"

function ViewportCalculator(size, device) {
    if (breakpoint.hasOwnProperty(device)) {
        return (size / breakpoint[device]) * 100 + "vw"
    } else {
        return 0
    }
}

export default ViewportCalculator
