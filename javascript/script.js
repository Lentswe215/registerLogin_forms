import Highway from "@dogstudio/highway";
import Fade from "./transition";

const H = new Highway.Core({
//   home: Fade,
//   loginpage: Fade,
//   registerpage: Fade

transitions: {
    default: Fade
}
});
