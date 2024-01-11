# JS Challenge - Create a function to Approve Commits



Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

#### Function Signature:

```javascript
function checkPullRequestApproval(latestCommitTimestamp, reviews) {

```

The function checkPullRequestApproval takes two parameters:

- ##### latestCommitTimestamp: The timestamp of the latest commit.
- ##### reviews: An array of review objects, where each object contains information about a review, including userId, timestamp, and reviewType.

#### Initialize uniqueApprovers Set:

```javascript
const uniqueApprovers = reviews.reduce((approvers, review) => {

```

We use the Array.reduce method to iterate through the reviews array. The uniqueApprovers variable is initialized as a Set. The reduce method takes a callback function with two parameters: approvers (the accumulator) and review (the current review object).

#### Check and Add Approvals to Set:

```javascript
   if (
      review.reviewType === "APPROVAL" &&
      review.timestamp >= latestCommitTimestamp
   ) {
      approvers.add(review.userId);
   }
```

For each review, we check if it is an "APPROVAL" and if the approval timestamp is greater than or equal to the latest commit timestamp. If both conditions are met, we add the userId to the uniqueApprovers Set.

#### Return Updated Set in Each Iteration:


```javascript
     return approvers;
}, new Set());

```

The reduce function returns the updated uniqueApprovers Set in each iteration. This set accumulates unique user IDs providing approvals.

#### Check If There Are at Least Two Unique Approvers:

```javascript
 return uniqueApprovers.size >= 2;

```
Finally, we check if the size of the uniqueApprovers Set is greater than or equal to 2. If true, it means there are at least two unique users providing approvals after the latest commit, and the function returns true. Otherwise, it returns false.

#### Example Usage:

```javascript
 const latestCommitTimestamp = Date.now();
const reviews = [
   // ... (review objects)
];

const result = checkPullRequestApproval(latestCommitTimestamp, reviews);
console.log(result); // Output: true or false
```
This part of the code demonstrates how to use the function with a sample latestCommitTimestamp and an array of reviews. The result is then printed to the console.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)