---
title: 'Summarizing Different Mock Types In Jest'
excerpt: 'When writing tests, it is important to understand mocks, how they work, and when to use them. My recent experience with test writing encouraged me to learn more about different types of mocks.'
coverImage: '/blog/jest-mock.jpeg'
date: '2023-10-16'
ogImage:
  url: '/blog/jest-mock.jpeg'
---

Using Jest, we can mock modules or functions.

1. Mock functions
```
const mockFn = jest.fn()
```
By default, calling *mockFn* returns *undefined* because the implementation is empty. You can add an optional implementaiton by using one of the following two ways.
- *jest.fn(() => 'mock impl')* 
- *mockFn.mockImplementation(() => 'mock impl')*

2. Mock modules
```
jest.mock('../your_module_name')
```
After this, all the functions in *your_module_name* with be replaced with mocks, ie: *jest.fn()*.
You can set a mock implementation for each exposed function using following ways.
- *mockFunc.mockImplementations(() => 'mock impl')* 
- Use partial mock to only mock certain functions like so:
```
jest.mock('../your_module_name', () => {
  const originalModule = jest.requireActual('../your_module_name');

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mock impl default'),
    func: 'mock impl',
  };
})
```

3. Spy functions
```
jest.spyOn(module, 'func')
jest.spyOn(module, 'func').mockImplementation(() => 'mock func spy')
```
This is similar to mock functions above, but it is often used when you want to keep the original implementation, and only watch the function being called, or restore the original implementation after mock.

***

Finally, we need to clear/reset mocks after using to ensure each test runs correctly without conflicts. There are 3 functions you can call on the mocks to do the clean up under different senarios.
- mockClear
  * Clears information stored in mocks.
- mockReset
  * Clears information stored in mocks.
  * Replaces the implementation with an empty one, returns *undefined*
- mockRestore
  * Similar to mockReset, but restores the implementation to be the original one. 
  * Only used on mocks created using *spyOn*


