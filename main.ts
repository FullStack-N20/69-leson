// 1. Class Decorator
function Component(constructor: Function) {
  console.log(`Component: ${constructor.name}`);
}

// 2. Method Decorator
function LogMethod(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method: ${String(propertyKey)} called with args:`, args);
    return originalMethod.apply(this, args);
  };
}

// 3. Property Decorator
function LogProperty(target: Object, propertyKey: string | symbol) {
  console.log(`Property: ${String(propertyKey)}`);
}

// 4. Accessor Decorator
function LogAccessor(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) {
  const originalGetter = descriptor.get;
  const originalSetter = descriptor.set;

  if (originalGetter) {
    descriptor.get = function () {
      console.log(`Getter called: ${String(propertyKey)}`);
      return originalGetter.call(this);
    };
  }

  if (originalSetter) {
    descriptor.set = function (value: any) {
      console.log(`Setter called: ${String(propertyKey)} with value:`, value);
      originalSetter.call(this, value);
    };
  }
}

// 5. Parameter Decorator
function LogParam(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(
    `Parameter in method: ${String(propertyKey)}, position: ${parameterIndex}`
  );
}

