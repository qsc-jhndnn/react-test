import { option, optionLib } from "./options";

export class mathLib extends optionLib {

  constructor() {
    super();
    this.name = "math";
    this.description = "Some math stuff"
  }

  getOptionsInternal(tok: string): Array<option> {
    return [
      {
        name: "abs",
        details: "math.abs(x)",
        help: "Returns the absolute value of x."
      },
      {
        name: "acos",
        details: "math.acos(x)",
        help: "Returns the arc cosine of x(in radians)."
      },
      {
        name: "asin",
        details: "math.asin(x)",
        help: "Returns the arc sine of x(in radians)."
      },
      {
        name: "atan",
        details: "math.atan(x)",
        help: "Returns the arc tangent of x(in radians)."
      },
      {
        name: "atan2",
        details: "math.atan2(y, x)",
        help: "Returns the arc tangent of y/x(in radians), but uses the signs of both parameters to find the quadrant of the result.(It also handles correctly the case of x being zero.)"
      },
      {
        name: "ceil",
        details: "math.ceil(x)",
        help: "Returns the smallest integer larger than or equal to x."
      },
      {
        name: "cos",
        details: "math.cos(x)",
        help: "Returns the cosine of x(assumed to be in radians)."
      },
      {
        name: "cosh",
        details: "math.cosh(x)",
        help: "Returns the hyperbolic cosine of x."
      },
      {
        name: "deg",
        details: "math.deg(x)",
        help: "Returns the angle x(given in radians) in degrees."
      },
      {
        name: "exp",
        details: "math.exp(x)",
        help: "Returns the value ex."
      },
      {
        name: "floor",
        details: "math.floor(x)",
        help: "Returns the largest integer smaller than or equal to x."
      },
      {
        name: "fmod",
        details: "math.fmod(x, y)",
        help: "Returns the remainder of the division of x by y that rounds the quotient towards zero."
      },
      {
        name: "frexp",
        details: "math.frexp(x)",
        help: "Returns m and e such that x = m2e, e is an integer and the absolute value of m is in the range [0.5, 1)(or zero when x is zero)."
      },
      {
        name: "hug",
        details: "math.huge",
        help: "The value HUGE_VAL, a value larger than or equal to any other numerical value."
      },
      {
        name: "ldexp",
        details: "math.ldexp(m, e)",
        help: "Returns m2e(e should be an integer)."
      },
      {
        name: "log",
        details: "math.log(x)",
        help: "Returns the natural logarithm of x."
      },
      {
        name: "max",
        details: "math.max(x, ···)",
        help: "Returns the maximum value among its arguments."
      },
      {
        name: "min",
        details: "math.min(x, ···)",
        help: "Returns the minimum value among its arguments."
      },
      {
        name: "modf",
        details: "math.modf(x)",
        help: "Returns two numbers, the integral part of x and the fractional part of x."
      },
      {
        name: "pi",
        details: "math.pi",
        help: "The value of pi."
      },
      {
        name: "pow",
        details: "math.pow(x, y)",
        help: "Returns xy.(You can also use the expression x^y to compute this value.)"
      },
      {
        name: "rad",
        details: "math.rad(x)",
        help: "Returns the angle x(given in degrees) in radians."
      },
      {
        name: "random",
        details: "math.random([m [, n]])",
        help: "When called without arguments, returns a uniform pseudo-random real number in the range [0,1). When called with an integer number m, math.random returns a uniform pseudo-random integer in the range [1, m]. When called with two integer numbers m and n, math.random returns a uniform pseudo-random integer in the range [m, n]."
      },
      {
        name: "randomseed",
        details: "math.randomseed(x)",
        help: "Sets x as the 'seed' for the pseudo-random generator: equal seeds produce equal sequences of numbers."
      },
      {
        name: "sin",
        details: "math.sin(x)",
        help: "Returns the sine of x(assumed to be in radians)."
      },
      {
        name: "sinh",
        details: "math.sinh(x)",
        help: "Returns the hyperbolic sine of x."
      },
      {
        name: "sqrt",
        details: "math.sqrt(x)",
        help: "Returns the square root of x.(You can also use the expression x^0.5 to compute this value.)"
      },
      {
        name: "tan",
        details: "math.tan(x)",
        help: "Returns the tangent of x(assumed to be in radians)."
      },
      {
        name: "tanh",
        details: "math.tanh(x)",
        help: "Returns the hyperbolic tangent of x."
      }
    ];
  }
}