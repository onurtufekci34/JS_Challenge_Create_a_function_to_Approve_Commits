function checkPullRequestApproval(latestCommitTimestamp, reviews) {
    const uniqueApprovers = reviews.reduce((approvers, review) => {
      if (
        review.reviewType === "APPROVAL" &&
        review.timestamp >= latestCommitTimestamp
      ) {
        approvers.add(review.userId);
      }
      return approvers;
    }, new Set());
  
    return uniqueApprovers.size >= 2;
  }
  
  // Example usage:
  const latestCommitTimestamp = Date.now();
  const reviews = [
    { userId: "user1", timestamp: Date.now() - 1000, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 10, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 10, reviewType: "APPROVAL" },
    { userId: "user2", timestamp: Date.now() + 20, reviewType: "COMMENT" },
    { userId: "user1", timestamp: Date.now() + 30, reviewType: "APPROVAL" },
    { userId: "user3", timestamp: Date.now() + 35, reviewType: "APPROVAL" },
  ];
  
  const result = checkPullRequestApproval(latestCommitTimestamp, reviews);
  console.log(result); // Output: true or false
  