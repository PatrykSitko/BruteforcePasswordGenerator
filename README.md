# Password Generator.

npm i bruteforce-password-generator

- Import PasswordGenerator Class.
- Instantiate PasswordGenerator class.
- Use .nextPassword method on the Instantiated Class Variable to obtain:

  - Each time an unique password.

- Use .hasNextPassword method on the Instantiated Class Variable to obtain:

  - If or not ".nextPassword" has a next one in store.

- Example:

  ```javascript
  import {
    PasswordGenerator,
    azAZ09_Combination,
  } from "bruteforce-password-generator";

  const passwordLength = 10;

  const passwordGenerator = new PasswordGenerator(
    azAZ09_Combination,
    passwordLength
  );

  const generatedPassword = passwordGenerator.nextPassword;

  console.log(generatedPassword);
  console.log(passwordGenerator.hasNextPassword);
  ```

  - This class remembers previously generated combinations and returns each time a new one of the requested length.
  - As the JavaScript heapspace is 4GB by default. Your application will encounter an "FATAL ERROR: Reached heap limit. Allocation failed - JavaScript heap out of memory." bottleneck.
  - I haven't added a clear method for the previously remembered combinations as this was not the purpose of this package.
  - I suggest you to enlarge the heap allocation or reinstantiate the class itself.

  ## How to enlarge the heap space:

  - Use the --max-old-space-size flag when running a Node. js application to increase the available memory heap.

  ```javascript
  NODE_OPTIONS=--max-old-space-size=8192 npm start
  ```

  - **Note that the flag needs to come before calling the file with the node command.**

### Tip:

- Use worker threads on the .nextPassword getter to increase the output speed.
