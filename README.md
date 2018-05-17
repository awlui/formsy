# Formsy-React HOC

Formsy-React Fields rerender the entire form whenever one input field has changed.
This is a Higher Order Component that stops render-expensive fields from being re-rendered
if there value hasn't changed. Currently the HOC just memoizes the value to compare against
the next value returned by props.getValue(). I'll add a config parameter in the future to specify what
other values beside props.getValue() to memoize and check on successive shouldComponentUpdate calls.
