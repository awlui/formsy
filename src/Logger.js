// Decorator function for logging
export const logger = function(target, name, descriptor) {

  // obtain the original function
  let fn = descriptor.value;

  // create a new function that sandwiches
  // the call to our original function between
  // two logging statements
  let newFn  = function(...args) {
    console.log('starting %s', name);
    console.log(this.refs.form.getModel(), "MODEL");
    fn.apply(this, args);
    console.log('ending %s', name);
  };

  // we then overwrite the origin descriptor value
  // and return the new descriptor
  descriptor.value = newFn;
  return descriptor;
}
