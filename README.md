# Express.js Route 500 Error Instead of 404 on User Not Found

This repository demonstrates a common issue in Express.js routes where a 500 Internal Server Error is returned instead of a 404 Not Found error when a resource (in this case, a user) is not found. The problem stems from insufficient error handling in the route handler.

## Problem

The `bug.js` file contains an Express.js route that attempts to fetch user details based on a provided ID.  If the user is not found, instead of returning a 404, it inadvertently throws an error resulting in a 500 error.

## Solution

The `bugSolution.js` file demonstrates the corrected implementation.  It explicitly checks if the user is found and returns a 404 response if not.  This prevents the unhandled error and produces the expected 404 response.

## How to run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install express` to install the necessary dependencies.
4. Run `node bug.js` (to see the problematic behavior).
5. Run `node bugSolution.js` (to see the corrected behavior).