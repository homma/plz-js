
/* types */

/*
 * Integers
 */
const TInt = function() {};

/*
 * Booleans
 */
const TBool = function() {};

/*
 * Functions
 */
const TArrow = function(t1, t2) {
  this.type1 = t1;
  this.type2 = t2;
};

/* expressions */

/*
 * n (string) : variable name
 */
const Var = function(n) {
  this.name = n;
}

/*
 * i (int) : integer value
 */
const Int = function(i) {
  this.int = i;
}

/*
 * b (bool) : bool value
 */
const Bool = function(b) {
  this.bool = b;
}

/*
 * l (int) : left hand value
 * r (int) : right hand value
 */
const Times = function(l, r) {
  this.lval = l;
  this.rval = r;
}

const Plus = function(l, r) {
  this.lval = l;
  this.rval = r;
}

const Minus = function(l, r) {
  this.lval = l;
  this.rval = r;
}

const Equal = function(l, r) {
  this.lval = l;
  this.rval = r;
}

const Less = function(l, r) {
  this.lval = l;
  this.rval = r;
}

/*
 * cond : condition
 * t : then expression
 * e : else expression
 */
const If = function(c, t, e) {
  this.cond = c;
  this.then = t;
  this.elss = e;
}

/*
 * n (string) : function name
 * a (string) : argument name
 * at : argument type
 * ft : function type
 * e : expression
 */
const Fun = function(n, a, at, ft, e) {
  this.name = n;
  this.arg = a;
  this.arg_ty = at;
  this.fun_ty = ft;
  this.expr = e;
}

/* Toplevel commands */

/*
 * Expressions
 */
const Expr = function(e) {
  this.expr = e;
}

/*
 * Value definition [let x = e]
 */
const Def = function(n, e) {
  this.name = n;
  this.expr = e;
}