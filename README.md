# Password Generator.

- Import PasswordGenerator Class.
- Instantiate PasswordGenerator class.
- Use .nextPassword method on the Instantiated Class Variable to obtain:

  - Each time an unique password.

- Example:

  ```javascript
  import {
    PasswordGenerator,
    azAZ09_Combination,
  } from "bruteforcePasswordGenerator.main";

  const passwordLength = 10;

  const passwordGenerator = new PasswordGenerator(
    azAZ09_Combination,
    passwordLength
  );

  const generatedPassword = passwordGenerator.nextPassword;

  console.log(generatedPassword);
  ```

  - This class remembers previously generated combinations and returns each time a new one of the requested length.
  - As the JavaScript heapspace is 4GB by default. Your application will encounter an "FATAL ERROR: Reached heap limit. Allocation failed - JavaScript heap out of memory." bottleneck.
  - I haven't added a clear method for the previously remembered combinations as this was not the purpose of this package.
  - I suggest you to enlarge the heap allocation or reinstantiate the class itself.
